import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
