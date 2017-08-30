var express = require('express');
var router = express.Router();

var Battery = require('../models/battery.js');

// for adding a battery we will need the id of client, batterymodel and order
router.post('/addBattery',function(req,res){
	console.log('inside addBattery route');
	var data = req.body;


    
    var battery = new Battery();

    battery.batterySerialNo = data.batterySerialNo;
    battery.labSerialNo = data.labSerialNo;
    battery.batteryModel = data.batteryModel;
    battery.batteryOrder = data.batteryOrder;
    battery.batteryClient = data.batteryClient;
    
    // saving in to db and updating the client orders array
	battery.save(function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{
		    res.json({success:true, data:doc})
        }
	})
});


router.post('/getBattery',function(req,res){
	console.log('inside get single battery');

    var data = req.body; 

    Battery.findOne({_id: data.id}).populate('batteryClient batteryModel batteryOrder').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})

router.post('/getBattieriesByClientId',function(req,res){
	console.log('inside get getBattieriesByClientId battery');

    var data = req.body; 

    Battery.find({batteryClient: data.id}).populate('batteryClient batteryModel batteryOrder').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})

router.post('/getBattieriesByOrderId',function(req,res){
	console.log('inside get getBattieriesByOrderId battery');

    var data = req.body; 

    Battery.find({batteryOrder: data.id}).populate('batteryClient batteryModel batteryOrder').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})

router.post('/getBattieriesByBatteryModelId',function(req,res){
	console.log('inside get getBattieriesByBatteryModelId battery');

    var data = req.body; 

    Battery.find({batteryModel: data.id}).populate('batteryClient batteryModel batteryOrder').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})



module.exports = router;