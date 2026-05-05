const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.MYSQLPORT || process.env.DB_PORT || '3306'),
  user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || process.env.DB_NAME || 'paperease',
  charset: 'utf8mb4',
  timezone: '+00:00',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verificar conexión
pool.getConnection((error, connection) => {
  if (error) {
    console.error('❌ Error al conectar a MySQL:', error.message);
    console.error('💡 Asegúrate de que MySQL/MariaDB esté corriendo');
    return;
  }
  console.log('✅ Conexión exitosa a MySQL');
  connection.release();
});

// Exportar el pool con soporte de promesas
module.exports = pool;