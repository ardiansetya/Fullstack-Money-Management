import express from "express";
import { config } from "dotenv";
import cors from "cors";
import userController from "./user/user.controller.js";
import categoryController from "./category/category.controller.js";
import transactionController from "./transaction/transaction.controller.js";
import authController from "./auth/auth.controller.js";

config(); // Memanggil dotenv untuk memuat environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World");
});

app.use("/api", userController); 
app.use("/api", categoryController); 
app.use("/api", transactionController); 
app.use("/auth", authController); 

app.listen(port, () => {
   console.log("Server running on port " + port);
});
