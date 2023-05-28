import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x9dwp5i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export let db;
export let Results;
export let Courses;
export let Users;
export let Students;
export let Teachers;

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    db = client.db("Result-Processing");
    Results = db.collection("results");
    Courses = db.collection("courses");
    Users = db.collection("users");
    Students = db.collection("students");
    Teachers = db.collection("teachers");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with a non-zero code
  }
};
