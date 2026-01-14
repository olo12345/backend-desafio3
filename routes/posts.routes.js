import { Router } from "express";
import {getAllPosts, addPost} from "./../src/controller/posts.controller.js";

const router = Router();

router.get("" ,getAllPosts);

router.post("", addPost);

export default router;