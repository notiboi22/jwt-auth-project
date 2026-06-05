require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});