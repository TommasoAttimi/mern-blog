import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletePost,
  editPost,
  getPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/editpost/:postId/:userId", verifyToken, editPost);

export default router;
