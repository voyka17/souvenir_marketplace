import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
console.log('Puerto:', process.env.PORT);
console.log('DB URL:', process.env.DATABASE_URL ? 'Encontrada' : 'No encontrada');
import productsRoutes from './src/routes/productsRoutes.js'
import path from 'path';
import userRoutes from './src/routes/userRoutes.js'; 


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/product', productsRoutes);
app.use('/', userRoutes); 



app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});




