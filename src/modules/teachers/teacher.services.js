import { Teachers } from "../../db/db.js";

export const getTeachersFromDB = async () => {
  const results = await Teachers.find().toArray();
  return results;
};

export const postTeacherInDB = async (data) => {
  const result = await Teachers.insertOne(data);
  return result;
};
