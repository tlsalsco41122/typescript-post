import mysql from "mysql2/promise";
import { Pool } from "mysql2/promise"; // Pool 타입을 사용하려고 import

const pool: Pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
