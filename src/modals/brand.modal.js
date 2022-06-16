
const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({

    name:{ type: String, required: true},
    imgUrl:{ type: String, required: false}
},{
    versionKey:false,
    timeStamps:true
});

const brand= new mongoose.model('brand',brandSchema);


module.exports = brand;
