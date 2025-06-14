import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import productsRoutes from './src/routes/productsRoutes.js';
import userRoutes from './src/routes/userRoutes.js'; 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", productsRoutes);

app.use(cors());
app.use(express.json());

app.use('/',productsRoutes);
app.use('/', userRoutes); 

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});