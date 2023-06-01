import dotenv from "dotenv";
import app from "./app.js";
import { connectToDatabase } from "./src/db/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

await connectToDatabase();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
