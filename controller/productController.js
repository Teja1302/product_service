const Product = require('../model/productModel');
const { productSchema } = require('../validations/productValidation');
const { Op } = require('sequelize');

const createProduct = async (req, res) => {
    try {
        console.log('csdfcesv')
        const { error, value } = productSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { name, description, price, stock } = value;

        const newProduct = await Product.create({ name, description, price, stock });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ status: 500, error: 'Could not create product', details: error.message });
    }
};


const getAllProducts = async(req,res)=>{
    try {
        
        const products = await Product.findAll();
        res.json(products);
      } catch (error) {
       
        res.status(500).json({ error: 'Failed to retrieve products' });
      }

    }
   
    const getLowStockProducts = async (req, res) => {
      try {
       
        const lowStockProducts = await Product.findAll({
          where: {
            stock: { [Op.lt]: 10 } 
          }
        });
    
        res.json(lowStockProducts);
      } catch (error) {
       
        res.status(500).json({ error: error.message });
      }
    };
    
    const searchProducts = async (req, res) => {
      const {name} = req.query;
      console.log('adncabsd')
      try{
       const products = await Product.findAll({
         where:{
          name :name
          //description : description
         }
        })
         res.status(200).json(products);
        } catch (error) {
         return res.status(500).json({ error: error.message });
        }
      };
      
    

module.exports = {createProduct,getAllProducts,getLowStockProducts,searchProducts} ;




