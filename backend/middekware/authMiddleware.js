// const jwt = require('jsonwebtoken');


// const JWT_SECRET = 'bunneybet';
// function authenticateToken(req, res, next) {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: 'Access token required' });
//   }

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }
//     req.user = user;
//     next();
//   });
// }

// module.exports = { authenticateToken };
