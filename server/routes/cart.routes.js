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
  const { qty, size, color, price } = req.body;
  const productId = req.body._id;
  const userId = req.params.id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const cartId = await cart._id.toString();
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
          const updatedQty = await (cart.products[itemIndex].qty + qty);
          const updatedTotal = cart.total + qty * price;
          const updatedProduct = {
            productId,
            qty: updatedQty,
            size,
            color,
            price,
          };
          cart.products[itemIndex] = await updatedProduct;
          const updatedData = {
            userId: cart.userId,
            products: cart.products,
            qty: cart.qty,
            total: updatedTotal,
          };
          const updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            { ...updatedData },
            { new: true }
          );
          await updatedCart.save();
          console.log(updatedCart);
          res.status(200).send(updatedCart);
        } else {
          // ADD NEW PRODUCT TO CART
          await cart.products.push({
            productId,
            qty,
            size,
            color,
            price,
          });
          const updatedQty = cart.products.length;
          const updatedTotal = cart.total + qty * price;
          const updatedData = {
            userId: cart.userId,
            products: cart.products,
            qty: updatedQty,
            total: updatedTotal,
          };
          const updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            { ...updatedData },
            { new: true }
          );
          await updatedCart.save();
          res.status(200).send(updatedCart);
        }
      } else {
        // ADD NEW PRODUCT TO CART
        await cart.products.push({
          productId,
          qty,
          size,
          color,
          price,
        });
        const updatedQty = cart.products.length;
        const updatedTotal = cart.total + qty * price;
        const updatedData = {
          userId: cart.userId,
          products: cart.products,
          qty: updatedQty,
          total: updatedTotal,
        };
        const updatedCart = await Cart.findByIdAndUpdate(
          cartId,
          { ...updatedData },
          { new: true }
        );
        await updatedCart.save();
        console.log('UPDATED CART: ', updatedCart);
        res.status(200).send(updatedCart);
      }
    } else {
      // CREATE NEW CART FOR USER
      const newCart = await Cart.create({
        userId,
        products: [{ productId, qty, color, size, price }],
        qty: 1,
        total: qty * price,
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log('ADD TO CART ERROR: ', err);
    return res.status(500).send('Irgendwas ist schief gelaufen...');
  }
});

// UPDATE
router.put('/:id', verifyTokenAndAuth, async (req, res) => {
  try {
    const { type, product, index } = req.body;
    const { id } = req.params;
    const cart = await Cart.findOne({ userId: id });
    const cartId = await cart._id.toString();
    if (type === 'remove') {
      await cart.products.splice(index, 1);
      const updatedQty = cart.products.length;
      const updatedTotal = cart.total - product.qty * product.price;
      const updatedData = {
        userId: cart.userId,
        products: cart.products,
        qty: updatedQty,
        total: updatedTotal,
      };
      const updatedCart = await Cart.findByIdAndUpdate(
        cartId,
        { ...updatedData },
        { new: true }
      );
      await updatedCart.save();
      console.log(updatedCart);
      res.status(200).send(updatedCart);
    }
  } catch (err) {
    console.log('UPDATE CART ERROR: ', err);
    res.status(500).json(err);
  }
});

// DELETE
router.delete('/:id', verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Warenkorb wurde geleert!');
  } catch (err) {
    console.log('DELETE ERROR: ', err);
    res.status(500).json(err);
  }
});

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    console.log('GET CART ERROR: ', err);
    res.status(500).json(err);
  }
});

// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    console.log('GET ALL CARTS ERROR: ', err);
    res.status(500).json(err);
  }
});

module.exports = router;
