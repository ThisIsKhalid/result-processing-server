import { getStudentsFromDB, postStudentInDB } from "./student.service.js";


export const getStudents = async (req, res) => {
  try {
    const results = await getStudentsFromDB();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error("Error fetching results from the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const postStudent = async (req, res) => {
  try {
    const data = req.body;
    const student = await postStudentInDB(data);
    res.status(201).json({
      status: "success",
      data: student,
    });
  } catch (error) {
    console.error("Error posting student to the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
