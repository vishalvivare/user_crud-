
const express= require('express');
const User= require('../modals/user.modal');

const router= express.Router();


/// Getting all the users.
router.get('/',async(req,res)=>{

    try {
        const users= await User.find().lean().exec();
        if(!users){
            return res.status(500).send({success:false})
        }

        return res.status(200).send({users:users});

    } catch (error) {
        
        return res.status(500).send({error:error.message});
    }
});


// // creating a new user

router.post('/create',async(req,res)=>{
    try {
        const user= await User.create(req.body);
      
        return res.status(201).send({user:user});

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
});

// getting a user through the id.

router.get('/:id',async(req,res)=>{

    try {
        const user= await User.findById(req.params.id).lean().exec();
return res.status(200).send({user:user});

    } catch (error) {
        
        return res.status(500).send({error:error.message});
    }
})

// updating a user through the id of user

router.patch('/:id/edit',async(req,res)=>{

    try {
        const user= await User.findByIdAndUpdate({id:req.params.id}, req.body,{new:true}).lean().exec();
return res.status(201).send({user:user});

    } catch (error) {
        return res.status(500).send({error:error.message});

    }
});


// deleting a user through the id

router.delete(":/id/delete",async(req,res)=>{
    try {
        
        const user= await User.findByIdAndDelete({id:req.params.id}).lean().exec();

        return res.status(200).send({user:user});
    } catch (error) {
        
        return res.status(500).send({error:error.message});
    }
})

// get all the addressess of a particular user

router.get('/:id/address',async(req,res)=>{

    try {
         const user = await User.findById(req.params.id);
         const address= user.Address;

         return res.status(200).send({data:address});

    } catch (error) {
        
        return res.status(500).send({error:error.message});
    }
});

// creating the address of a user

router.patch('/:id/address/create', async(req,res)=>{

    try {
        const update_Address= await User.updateOne(
            {id:req.params.id},{$push:{address:req.body}}
        );

        if(update_Address.acknowledged===true){

            const user= await User.findById(req.params.id).lean().exec();
            return res.status(201).send({data:user.address});
        }

        return res.status(404).send("something went wrong");
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
})

// deleting a address of the user by user id.

router.delete('/:id/addressess/:idx/edit',async(req,res)=>{

    try {
        const delete_address = await User.findByIdAndDelete({id:req.params.id},{"Address._id":req.params.idx}).lean().exec();

        if(delete_address.acknowledged===true) {
             const user= await User.findById(req.params.id).lean().exec();

             return res.status(201).send({data:user.address,message:"success"})
        }

        return res.status(404).send({error:"something went wrong"});

        
    } catch (error) {
        res.status(500).send({error:error.message});
    }
})

module.exports=router;

