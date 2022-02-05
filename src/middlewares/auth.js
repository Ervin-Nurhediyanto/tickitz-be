import jwt from "jsonwebtoken";

const verifyAccess = (req, res, next) => {
  let token = req.headers.authorization
  token = token.split(' ')[1]

  jwt.verify(token, process.env.AUTH_SECRET, function (err, decoded) {
    if (err) return res.status(401).json({
      error: {
        code: 401,
        message: 'Unauthenticated'
      }
    })
    next()
  })
}

export default verifyAccess
