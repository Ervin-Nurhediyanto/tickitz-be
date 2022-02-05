import User from "../models/index.js";
import send from "../../../middlewares/send-email.js"

export const forgot = async (req, res) => {
  const { email } = req.body

  try {
    const users = await User.findAll({
      where: {
        email
      }
    })

    if (users.length < 1) {
      res.status(404).json({
        error: {
          code: 404,
          message: 'email not found'
        }
      })
    } else {
      send(email)
      res.status(200).json({
        data: users[0],
        message: 'Password reset request was sent successfully. Please check your email to reset your password'
      })
    }
  } catch (error) {
    res.json({ message: error.message })
  }
}
