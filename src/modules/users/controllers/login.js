import User from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const users = await User.findAll({
      where: {
        email
      }
    })

    if (!users) {
      res.status(401).json({
        error: {
          code: 401,
          message: 'unauthenticated'
        }
      })
    } else {
      const user = users[0]
      const hash = user.password

      bcrypt.compare(password, hash).then(
        (resCompare) => {
          if (!resCompare) {
            res.status(401).json({
              error: {
                code: 401,
                message: 'unauthenticated'
              }
            })
          } else {
            const payload = {
              id: user.id,
              email: user.email
            }

            jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: '3h' }, (_err, token) => {
              res.status(200).json({
                data: {
                  user: user,
                  token: token
                }
              })
            })
          }
        }
      )
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}
