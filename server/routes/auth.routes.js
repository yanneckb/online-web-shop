const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  if (!(firstName && lastName && username && email && password)) {
    return res.status(400).send('Alle Felder müssen ausgefüllt sein');
  }
  const oldEmail = await User.findOne({ email });
  const oldUsername = await User.findOne({ username });
  if (oldEmail) {
    return res
      .status(400)
      .send('Email existiert bereits. Bitte melde dich an!');
  }
  if (oldUsername) {
    return res
      .status(400)
      .send('Nutzername existiert bereits. Bitte melde dich an!');
  }
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  const accessToken = jwt.sign(
    {
      id: newUser._id,
      isAdmin: newUser.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  try {
    const user = await newUser.save();
    res.status(201).json({ user, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).send('Alle Felder müssen ausgefüllt sein');
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json('Nutzername oder Passwort stimmen nicht!');
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (decryptedPassword !== password) {
      return res.status(401).json('Nutzername oder Passwort stimmen nicht!');
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '5h' }
    );
    res.status(200).json({ user, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
