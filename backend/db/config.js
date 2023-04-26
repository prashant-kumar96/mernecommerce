import mongoose from "mongoose";
let database = "e-commerce";

let connectdb = mongoose.connect(
  `mongodb+srv://Prashant:prashant123@cluster0.udmreuk.mongodb.net/${database}`
);

export default connectdb;
