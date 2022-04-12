const jwt = require('jsonwebtoken');

// VERIFY USER TOKEN
module.exports.verifyToken = (req, res, next) => {
  const authToken = req.query.token || req.body.token || req.headers.token;
  if (authToken) {
    const token = authToken.split(' ')[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        res.status(403).json('Token ist ungültig!');
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('Du bist nicht authorisiert!');
  }
};

// VERIFY USER TOKEN AND AUTHENTICATE
module.exports.verifyTokenAndAuth = (req, res, next) => {
  this.verifyToken(req, res, () => {
    console.log(req.user);
    console.log(req.params);
    if (
      req.user.id === req.params.userId ||
      req.user.id === req.params.id ||
      req.user.isAdmin
    ) {
      next();
    } else {
      res.status(403).json('Du hast keine Rechte dafür!');
    }
  });
};

// VERIFY USER TOKEN AND CHECK FOR ADMIN
module.exports.verifyTokenAndAdmin = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Du bist kein Admin!');
    }
  });
};
