import User from "../models/index.js";
import bcrypt from "bcrypt";

export const update = async (req, res) => {
  const { username, password, email } = req.body
  const hashPassword = await bcrypt.hash(password, 10)

  try {
    username.length < 8
    ? res.json({ message: "your username must be at least 8 characters" })
    : password.length < 8
    ? res.json({ message: "your password must be at least 8 characters" })
    : email.length < 8
    ? res.json({ message: "invalid email address" })
    : await User.update({
      username,
      password: hashPassword,
      email
    }, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "update success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
