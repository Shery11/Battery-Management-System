var express = require('express');
var router = express.Router();

// var Client = require('../models/client.js');
var Orders = require('../models/orders.js')

// for adding an order we will also send the id of the client
router.post('/addOrder',function(req,res){
	console.log('inside addOrder route');
	var data = req.body;
    
    var order = new Orders();

    order.clientId = data.clientId;
    
    // saving in to db and updating the client orders array
	order.save(function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{
			res.json({success:true, data: doc})
		    // Client.findOneAndUpdate({ _id : data.id},{$push:{orders:doc._id}},{new: true},function(err,user){
		    //     if(err){
		    //       res.json({success:false,data:err})
		    //     }else{

		    //       res.json({success:true, data: user})
		    //     }
		    //  })
        }
	})
});


router.post('/getOrdersbyClientId',function(req,res){
	console.log('inside get getOrderbyClientId battery');

    var data = req.body; 

    Orders.find({clientId: data.id}).populate('clientId').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
});

module.exports = router;