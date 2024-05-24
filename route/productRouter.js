const express = require('express');

const {createProduct,getAllProducts, getLowStockProducts, searchProducts} = require('../controller/productController');

const { authenticateToken,authAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/create',authenticateToken,authAdmin,createProduct);

router.get('/getAll', authenticateToken,authAdmin,getAllProducts);

router.get('/getlowStocks',authenticateToken,authAdmin,getLowStockProducts)
router.get('/search',authenticateToken,authAdmin,searchProducts)
module.exports = router;
