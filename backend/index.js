import express from "express";
import connectdb from "./db/config.js";
import User from "./db/User.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  console.log(req.body);
  let data = new User(req.body);
  let result = await data.save();
  console.log(result, "result");
  result._id && res.send("data inserted successfully");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
