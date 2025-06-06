import express from "express";
import { pool } from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
