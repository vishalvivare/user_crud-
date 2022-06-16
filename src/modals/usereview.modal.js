
const mongoose = require('mongoose');

const user_reviewSchema = new mongoose.Schema({

    userID:{
        type:mongoose.Schema.type,
        ref:'user',
        required:true
    },
    productId:{
        type:mongoose.Schema.type,
        ref:'product',
        required:false
    },
    rating:{ type: Number, required: true},
    
});

const review= new mongoose.model('review',user_reviewSchema);

module.exports = review;