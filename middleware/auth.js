const jwt = require('jsonwebtoken')
const authenticateToken = async (req, res, next) => {

    const token = req.header('authorization')
    console.log(token)
    //const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
       return res.status(403).json({ message: 'Token is required' });
    }
    jwt.verify(token,process.env.JWT_SECRET, async (err, user,next) => {
        if (err) {
           return res.status(401).json({ message: 'Invalid token' });
        }
        
    })
    next()
}
const authAdmin = (req, res, next) => {
    try {
      const token = req.header('authorization')
     if (!token) return res.status(401).json({ message: 'No token provided' });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      if (decoded.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Access denied' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };

module.exports = {authenticateToken,authAdmin}
