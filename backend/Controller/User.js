import { User } from "../Model/User.js";
import JWT from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!email || password) {
      return res.status().json({
        sucess: false,
        message: "invalid email or password",
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        sucess: true,
        message: "Logged In Sucessfully",
      });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};



export const logOut = async (req, res) => {
  try {
   
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        sucess: true,
        message: "Logged Out Sucessfully",
      });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};
