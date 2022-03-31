const router = require('express').Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require('../middleware');
const Cart = require('../models/cart');

// CREATE
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD TO CART
router.post('/:id', verifyTokenAndAuth, async (req, res) => {
  const { qty, size, color } = req.body;
  const productId = req.body._id;
  const userId = req.params.id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // IF CART EXISTS FOR USER
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let itemColor = cart.products[itemIndex]?.color;
        let itemSize = cart.products[itemIndex]?.size;

        const colorCheck = itemColor[0] === color ? true : false;
        const sizeCheck = itemSize[0] === size ? true : false;
        // IF COLOR AND SIZE IS THE SAME
        if (colorCheck && sizeCheck) {
          // IF PRODUCT EXISTS IN CART, UPDATE QTY
          let productItem = cart.products[itemIndex];
          productItem.qty = qty;
          cart.products[itemIndex] = productItem;
        } else {
          // ADD NEW PRODUCT TO CART
          cart.products.push({ productId, qty, size, color });
        }
      } else {
        // ADD NEW PRODUCT TO CART
        cart.products.push({ productId, qty, size, color });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      // CREATE NEW CART FOR USER
      const newCart = await Cart.create({
        userId,
        products: [{ productId, qty, color, size }],
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send('Irgendwas ist schief gelaufen...');
  }
});

// UPDATE
router.put('/:id', verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    const cartId = await cart._id.toString();
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updatedCart);
    //res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.put('/:id', verifyTokenAndAuth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.id });
//     const cartId = await cart._id.toString();
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     console.log(updatedCart);
//     //res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// DELETE
router.delete('/:id', verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Warenkorb wurde geleert!');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
