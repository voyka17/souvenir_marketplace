import express from "express";
import cors from 'cors';
import { pool } from "./src/config/db.js";
import dotenv from "dotenv";
import productsRoutes from './src/routes/productsRoutes.js'

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

app.use(cors());
app.use(express.json());


app.use('/',productsRoutes)