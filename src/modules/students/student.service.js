import { Students } from "../../db/db.js";

export const getStudentsFromDB = async () => {
  const results = await Students.find().toArray();
  return results;
};

export const postStudentInDB = async (data) => {
  const result = await Students.insertOne(data);
  return result;
};
