import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//   try {
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//       photo: req.body.photo,
//     });
//     await newUser.save();
//     res.status(200).json({ success: true, message: "created" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "fail create" });
//   }
// };

export const register = async (req, res) => {
  const { email, password, ...rest } = req.body;

  try {
    const saltRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hashedPassword,
      ...rest,
    });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to register user" });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Thêm log để kiểm tra mật khẩu từ yêu cầu và mật khẩu từ cơ sở dữ liệu

    // Kiểm tra mật khẩu
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // Tạo token JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // Cài đặt cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 ngày
      })
      .status(200)
      .json({
        success: true,
        token,
        message: "Successfully login",
        data: { ...rest },
        role,
      });
  } catch (err) {
    console.error(err); // Ghi log lỗi để dễ dàng debug
    res.status(500).json({ success: false, message: "Fail to login" });
  }
};
