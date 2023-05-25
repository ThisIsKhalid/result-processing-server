import { Courses } from "../../db/db.js";

export const getCoursesFromDB = async () => {
  const results = await Courses.find().toArray();
  return results;
};

export const postCourseInDB = async (data) => {
  const result = await Courses.insertOne(data);
  return result;
};
