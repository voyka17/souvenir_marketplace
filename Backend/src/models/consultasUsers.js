import { pool } from "../config/db.js";

const getUser = async (email) => {
  try {
    const consulta = 'SELECT * FROM users WHERE email = $1;';
    const { rows } = await pool.query(consulta, [email]);
    return rows[0] || null; 
  } catch (error) {
    console.error("Error in getUser:", error);
    throw error; 
  }
};

const checkEmailEnabled = async (email) => {
  try {
    const consulta = 'SELECT email FROM users WHERE email = $1';
    const { rowCount } = await pool.query(consulta, [email]);
    return rowCount > 0;
  } catch (error) {
    console.error("Error in checkEmailEnabled:", error);
    throw error;
  }
};

const newUser_Profile = async (nombre, last_name, email, password, role_id, phone, country, address) => {
  const client = await pool.connect(); // Crear un cliente para la transacción
  try {
    await client.query('BEGIN');    
  
    const consulta = 'INSERT INTO users (name, last_name, email, password, role_id) values ($1, $2, $3, $4, $5) RETURNING *;';
    const values = [nombre, last_name, email, password, role_id];
    const { rows } = await client.query(consulta, values);  // Ejecutar la consulta para insertar el usuario
    console.log("New user created with values:", values);

    const consultaProfile = 'INSERT INTO profile_users (profileusers_id, phone, country, address) values ($1, $2, $3, $4) RETURNING *;';
    const valuesProfile = [rows[0].id_users, phone, country, address];  // Usar el id del usuario insertado
    const { rowsProfile } = await client.query(consultaProfile, valuesProfile);
    console.log("New profile created with values:", valuesProfile);

    await client.query('COMMIT');
    return rows[0]; 

  } catch (error) {
    await client.query('ROLLBACK');
    console.error("Error in newUser:", error);
    throw error;  
  } finally {    
    client.release();
  }
};


const getProfileUser = async (id_profile) => {
  try {
    const query = 'SELECT * FROM profile_users WHERE profileusers_id = $1';
    const { rows } = await pool.query(query, [id_profile]);
    return rows[0] || null; 
  } catch (error) {
    console.error("Error al obtener el perfil del usuario.", error);
    throw error;
  }
}; 

const updateProfileUser = async (profileusers_id, phone, country, address, image) => {
  try {
    const consulta = 'UPDATE profile_users SET phone = $2, country = $3, address = $4, image = $5 WHERE profileusers_id = $1';
    const values = [profileusers_id, phone, country, address, image];
    const { rowCount } = await pool.query(consulta, values);
    return rowCount > 0; 
  } catch (error) {
    console.error("Error al modificar el perfil del usuario.", error);
    throw error;
  }
};

export const consultasUsers = {
  getUser,
  checkEmailEnabled,
  newUser_Profile,
  getProfileUser,  
  updateProfileUser
};
