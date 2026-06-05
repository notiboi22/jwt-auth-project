const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../config/users");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  res.json({
    accessToken,
  });
};
