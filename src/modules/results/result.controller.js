import { getResultsFromDB, postResultInDB } from "./result.service.js";

export const getResults = async (req, res) => {
  try {
    const results = await getResultsFromDB();
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

export const postResult = async (req, res) => {
  try {
    const data = req.body;
    const result = await postResultInDB(data);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error posting result to the database:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
