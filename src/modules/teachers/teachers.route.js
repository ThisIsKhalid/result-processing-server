import express from "express";
import { getTeachers, postTeacher } from "./teacher.controller.js";

const router = express.Router();

router.get("/", getTeachers);
router.post("/add-teacher", postTeacher);

export default router;
