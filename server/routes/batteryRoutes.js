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


router.post('/addRegenerationDatabyId',function(req,res){
	
	console.log('inside addRegenerationDatabyId')
	var data = req.body;

	console.log(data);

	data.createdAt = new Date();
	console.log(data);

	var reg = {
		v : data.v,
		i : data.i,
		ir : data.ir,
		chargingTime : data.chargingTime
	}
    

    Battery.findOneAndUpdate({ _id : data.id},{$push:{regeneration:reg}},{new: true},function(err,battery){
        if(err){
        	console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
	})
});


router.post('/addChargingDatabyId',function(req,res){
	
	console.log('inside addChargingDatabyId')
	var data = req.body;

	console.log(data);

	data.createdAt = new Date();
	console.log(data);

	var reg = {
		startVoltage : data.sv,
        endVoltage : data.ev,
        startCurrent : data.sc,
        endCurrent : data.ec,
        startTime : data.st,
        endTime : data.et,
        charger : data.c,
        createdAt: data.createdAt
	}
    

    Battery.findOneAndUpdate({ _id : data.id},{$push:{charging:reg}},{new: true},function(err,battery){
        if(err){
        	console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
	})
});


router.post('/addDischargingDatabyId',function(req,res){
	
	console.log('inside addDischargingDatabyId')
	var data = req.body;

	console.log(data);

	data.createdAt = new Date();
	console.log(data);

	var discharge = {
		
		startVoltage : data.sv,
        endVoltage : data.ev,
        startCurrent : data.sc,
        endCurrent : data.ec,
        startTime : data.st,
        endTime : data.et,
        discharger : data.d,
        capacity : data.c,
        createdAt: data.createdAt
	
	}

	console.log(discharge)
    

    Battery.findOneAndUpdate({ _id : data.id},{$push:{discharging:discharge}},{new: true},function(err,battery){
        if(err){
        	console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
	})
});



module.exports = router;