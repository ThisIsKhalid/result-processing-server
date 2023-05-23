import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app.js";
import { connectToDatabase } from "./db/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

await connectToDatabase();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


