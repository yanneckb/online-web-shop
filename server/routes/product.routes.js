const router = require('express').Router();
const { verifyTokenAndAdmin } = require('../middleware');
const Product = require('../models/product');

// CREATE
router.post('/', verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Produkt wurde erfolgreich gelöscht!');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCTS
router.get('/find/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
  const queryNew = req.query.new;
  const queryCat = req.query.category;
  console.log('QUERY NEW: ', req.query);
  console.log('QUERY CAT: ', queryCat);
  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCat) {
      products = await Product.find({ cateogries: { $in: [queryCat] } });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
