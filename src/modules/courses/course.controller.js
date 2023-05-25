import { getCoursesFromDB, postCourseInDB } from "./course.services.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await getCoursesFromDB();
    res.status(200).json({
      status: "success",
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses from the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const postCourse = async (req, res) => {
  try {
    const data = req.body;
    const course = await postCourseInDB(data);
    res.status(201).json({
      status: "success",
      data: course,
    });
  } catch (error) {
    console.error("Error posting course to the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
