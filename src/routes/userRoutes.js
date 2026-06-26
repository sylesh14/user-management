const express = require("express");

const { getUsers } = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");

const authorize = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/", authMiddleware, authorize("admin"), getUsers);

module.exports = router;
