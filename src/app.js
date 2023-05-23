import express from "express";
import cors from "cors";

const app = express();

// routes
import resultRoute from './modules/results/result.route.js'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/results', resultRoute)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app
