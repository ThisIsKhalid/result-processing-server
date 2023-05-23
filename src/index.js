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

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x9dwp5i.mongodb.net/?retryWrites=true&w=majority`;
// console.log(process.env.DB_PASS);
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// DB Collection
// export const Results = client.db("Result-Processing").collection("results");
// export const Courses = client.db("Result-Processing").collection("courses");
// export const Users = client.db("Result-Processing").collection("users");


// ---------database connection----------
// async function run() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");

//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   } finally {
//     await client.close();
//   }
// }
// run().catch((err) => console.log(err));


