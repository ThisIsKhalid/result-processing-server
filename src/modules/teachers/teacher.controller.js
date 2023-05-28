import { getTeachersFromDB, postTeacherInDB } from "./teacher.services.js";


export const getTeachers = async (req, res) => {
  try {
    const results = await getTeachersFromDB();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error("Error fetching teachers from the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const postTeacher = async (req, res) => {
  try {
    const data = req.body;
    const student = await postTeacherInDB(data);
    res.status(201).json({
      status: "success",
      data: student,
    });
  } catch (error) {
    console.error("Error posting teacher to the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
