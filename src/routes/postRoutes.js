const express = require("express");

const {
  createPost,
  getPosts,
  likePost,
} = require("../controllers/postController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createPost);

router.get("/", authMiddleware, getPosts);

router.post("/:id/like", authMiddleware, likePost);

module.exports = router;
