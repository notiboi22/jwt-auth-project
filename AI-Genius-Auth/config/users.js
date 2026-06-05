const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "Admin",
  },
  {
    id: 2,
    email: "premium@gmail.com",
    password: bcrypt.hashSync("premium123", 10),
    role: "Premium_User",
  },
  {
    id: 3,
    email: "free@gmail.com",
    password: bcrypt.hashSync("free123", 10),
    role: "Free_User",
  },
];

module.exports = users;