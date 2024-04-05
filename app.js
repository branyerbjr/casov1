const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: 'mysql-casedb',
  user: 'root',
  password: '12345',
  database: 'casov1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

app.get('/producto', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});


app.post('/producto', (req, res) => {
  const { nombre, precio } = req.body;
  const producto = { nombre, precio };

  connection.query('INSERT INTO productos SET ?', producto, (error, results, fields) => {
    if (error) throw error;
    console.log('Producto creado con ID:', results.insertId);
    res.redirect('/producto');
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
