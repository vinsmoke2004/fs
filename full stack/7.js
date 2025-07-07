const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log('${req.method} ${req.url}');
  next();
});

// In-memory "database" for products
let products = [];
let currentId = 1;

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// GET /products - Returns list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products - Add new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Product must have a name and price (number).' });
  }
  const newProduct = { id: currentId++, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET /products/:id - Get product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// PUT /products/:id - Update product
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });

  const { name, price } = req.body;
  if (name) product.name = name;
  if (typeof price === 'number') product.price = price;

  res.json(product);
});

// DELETE /products/:id - Delete product
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send(); // No content
});

// Start server
app.listen(PORT, () => {
  console.log("Server running at http://localhost:${PORT}");
});