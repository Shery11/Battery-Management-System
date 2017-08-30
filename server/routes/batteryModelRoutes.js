var express = require('express');
var router = express.Router();

var BatteryModel = require('../models/batteryModel.js');

// for adding a battery model we will also send the id of the order
router.post('/addBatteryModel',function(req,res){
	console.log('inside addBatteryModel route');
	var data = req.body;
    
    var batteryModel = new BatteryModel();

    batteryModel.brand = data.brand;
    batteryModel.model = data.model;
    batteryModel.volt = data.volt;
    batteryModel.amp = data.amp;
    batteryModel.quantity = data.quantity;
    batteryModel.orderId = data.orderId;
    
    // saving in to db 
	batteryModel.save(function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{

			res.json({success:true, data: doc});
		    // Orders.findOneAndUpdate({ _id : data.id},{$push:{models:doc._id}},{new: true},function(err,user){
		    //     if(err){
		    //       res.json({success:false,data:err})
		    //     }else{

		    //       res.json({success:true, data: user})
		    //     }
		    //  })
        }
	})
});


router.post('/getBatteryModelsbyOrderId',function(req,res){
	console.log('inside get getBatteryModelsbyOrderId battery');

    var data = req.body; 

    BatteryModel.find({orderId: data.id}).populate({
    	path:'orderId',
    	model:'Orders',
    	populate:{
            path:'clientId',
    	    model:'Client',
        }
    }).exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})


module.exports = router;