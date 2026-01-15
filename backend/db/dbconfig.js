import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    allowExitOnIdle: true
});


pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Error al conectar la Db:', err)
    } else {
        console.log('🔋DB-Conectada')
    }
})

export default pool;