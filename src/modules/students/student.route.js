import express from "express";
import { getStudents, postStudent } from "./student.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/add-student", postStudent);

export default router;
