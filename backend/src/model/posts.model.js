import pool from "../../db/dbconfig.js";

//GET
const getAllPostsModel = async () => {
    const sqlQuery = "SELECT * from posts"
    const { rows } = await pool.query(sqlQuery);
    console.log({ rows });
    return ({ rows });
}

//POST
const addPostModel = async (titulo, img, descripcion) => {
    const consulta = `INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)`;
    const values = [titulo, img, descripcion, 0];
    const result = await pool.query(consulta, values);
    console.log("post agregado", result);
    return result.rows;
}

export {getAllPostsModel, addPostModel};