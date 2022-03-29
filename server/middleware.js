const jwt = require('jsonwebtoken');

// VERIFY USER TOKEN
module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(req.headers.token);
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json('Token ist ungültig!');
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
    console.log('USER: ', req.user.id);
    console.log('PARAMS: ', req.params.id);
    // if (req.user.id === req.params.id || req.user.isAdmin) {
    //   next();
    // } else {
    //   res.status(403).json('Du hast keine Rechte dafür!');
    // }
    next();
  });
};

// VERIFY USER TOKEN AND CHECK FOR ADMIN
module.exports.verifyTokenAndAdmin = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Du hast keine Rechte dafür!');
    }
  });
};
