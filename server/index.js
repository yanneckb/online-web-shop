const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const userRoute = require('./routes/users.routes');
const authRoute = require('./routes/auth.routes');
const productRoute = require('./routes/product.routes');
const cartRoute = require('./routes/cart.routes');
const orderRoute = require('./routes/order.routes');
const stripeRoute = require('./routes/stripe.routes');

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('DATABASE CONNECTED!'))
  .catch((err) => {
    console.log('ERROR: ', err);
  });

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.get('/', (req, res) => {
  res.send('HELLO FROM BACKEND');
});

const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
  console.log(`BACKEND RUNNING ON http://localhost:8080`);
});
