import { Results } from "../../db/db.js";

export const getResultsFromDB = async () => {
  const results = await Results.find().toArray();
  return results;
};

export const postResultInDB = async (data) => {
  const result = await Results.insertOne(data);
  return result;
};
