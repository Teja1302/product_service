const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required()
});

module.exports = {productSchema};
