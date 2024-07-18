const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'productdb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// CRUD Endpoints

// Create Product
app.post('/products', (req, res) => {
  const { name } = req.body;
  const sql = 'INSERT INTO product (name) VALUES (?)';
  db.query(sql, [name], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, name });
  });
});

// Create Product Info
app.post('/product-info', (req, res) => {
  const { product_id, description, price, category } = req.body;
  const sql = 'INSERT INTO product_info (product_id, description, price, category) VALUES (?, ?, ?, ?)';
  db.query(sql, [product_id, description, price, category], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, product_id, description, price, category });
  });
});

// Read All Products
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM product';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Read Single Product
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM product WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Read Product Info
app.get('/product-info/:product_id', (req, res) => {
  const { product_id } = req.params;
  const sql = 'SELECT * FROM product_info WHERE product_id = ?';
  db.query(sql, [product_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Update Product Info
app.put('/product-info/:id', (req, res) => {
  const { id } = req.params;
  const { description, price, category } = req.body;
  const sql = 'UPDATE product_info SET description = ?, price = ?, category = ? WHERE id = ?';
  db.query(sql, [description, price, category, id], (err) => {
    if (err) throw err;
    res.send({ id, description, price, category });
  });
});

// Delete Product
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const deleteProduct = 'DELETE FROM product WHERE id = ?';
  const deleteProductInfo = 'DELETE FROM product_info WHERE product_id = ?';

  db.query(deleteProductInfo, [productId], (err, result) => {
    if (err) throw err;

    db.query(deleteProduct, [productId], (err, result) => {
      if (err) throw err;
      res.status(204).send();
    });
  });
});

// Fetch all products with their details
app.get('/products-all', (req, res) => {
  const query = `
    SELECT p.id, p.name, pi.description, pi.price, pi.category
    FROM product p
    LEFT JOIN product_info pi ON p.id = pi.product_id
  `;

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

// Update Product and Product Info
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const { name, description, price, category } = req.body;

  const updateProduct = 'UPDATE product SET name = ? WHERE id = ?';
  const updateProductInfo = `
    INSERT INTO product_info (product_id, description, price, category) 
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE description = VALUES(description), price = VALUES(price), category = VALUES(category)
  `;

  db.query(updateProduct, [name, productId], (err, result) => {
    if (err) throw err;

    db.query(updateProductInfo, [productId, description, price, category], (err, result) => {
      if (err) throw err;
      res.status(200).send({ id: productId, name, description, price, category });
    });
  });
});

// Start the Server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
