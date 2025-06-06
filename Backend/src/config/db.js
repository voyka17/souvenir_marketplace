import pkg from "pg";
import dotenv from "dotenv"; // para las variables de entorno

dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // connectionString simplifica la forma de conexión
});
