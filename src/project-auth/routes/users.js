const express = require("express");
const {
  register,
  login,
  protectedRoute,
} = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authenticate, protectedRoute);
router.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.json({ message: "Ruta exclusiva para administradores" });
});

module.exports = router;
