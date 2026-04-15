const http = require('http');
const mysql = require('mysql2');

console.log("Starting app...");

// DB connection
const connection = mysql.createConnection({
  host: 'aws-devops-db.c5oqk08mi0us.eu-north-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Admin@10906'
});

// Try connecting
connection.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err);
    return;
  }
  console.log('✅ Connected to DB');

  // Create DB
  connection.query("CREATE DATABASE IF NOT EXISTS devopsdb", (err) => {
    if (err) {
      console.error("DB create error:", err);
      return;
    }

    connection.query("USE aws-devops-db");

    connection.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text VARCHAR(255)
      )
    `);
  });
});

// Server
const server = http.createServer((req, res) => {

  connection.query(
    "INSERT INTO messages (text) VALUES ('Hello from AWS 🚀')"
  );

  connection.query(
    "SELECT * FROM messages",
    (err, results) => {
      if (err) {
        res.end('Error fetching data');
        return;
      }

      res.end(JSON.stringify(results));
    }
  );
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
