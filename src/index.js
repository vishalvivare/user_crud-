
const express= require('express');
const app = express();
// const cors=require('cors');

const userController= require('./controllers/usercontroller');
const userviewController= require('./controllers/user.review.controller');
const productController= require('./controllers/product.controller');
const categoryController= require('./controllers/category.controller');
const brandController= require('./controllers/brand.controller');


app.use(express.json());
// app.use(cors());


app.use("/users",userController);
app.use("/products",productController);
app.use("/category",categoryController);
app.use("/brand",brandController);
app.use("/review",userviewController);


module.exports =app;