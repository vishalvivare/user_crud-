
const express=require('express');

const Product = require('../modals/product.modal');

const router = express.Router();


// getting all the products.
router.get('/',async(req, res)=>{

    try {
        const product = await Product.find().lean().exec();

        return res.status(200).send({product: product});
    } catch (error) {
        
        return res.status(500).send({error: error.message});
    }
});

// creating a product.

router.post('/create',async(req, res)=>{

    try {
        
    } catch (error) {
        
    }
})

