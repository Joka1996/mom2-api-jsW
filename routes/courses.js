import express from "express";
import {
  createCourse,
  getCourses,
  getSingle,
  deleteCourse,
  updateCourse,
} from "../controllers/courses.js";

const router = express.Router();

// alla routes här startas med /api/courses
router.get("/", getCourses);

// lägg till kurser
router.post("/", createCourse);

// hämta enskilt element
router.get("/:id", getSingle);

// radera element
router.delete("/:id", deleteCourse);

// uppdatera element
router.put("/:id", updateCourse);

export default router;
