var express = require('express');
var router = express.Router();

var Battery = require('../models/battery.js');

// for adding a battery we will need the id of client, batterymodel and order
router.post('/addBattery',function(req,res){
	console.log('inside addBattery route');
    var data = req.body;
    
    console.log(data);
    
    var battery = new Battery(data);

   
    
     // saving in to db and updating the client orders array
	battery.save(function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{
		    res.json({success:true, data:doc})
        }
	});
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

	var reg = {

		startDate :data.startDate,
        endDate : data.endDate,
        programAuto : data.programAuto,
        programManual : data.programManual,
        pulse : data.pulse,
    	pause : data.pause,
    	chargeProgram : data.chargeProgram,
    	chargeTime : data.chargeTime,
    	
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
        gravity : data.gravity,
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
        gravity : data.gravity,
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



router.post('/updateRegenerationDataById',function(req,res){
 
  console.log(req.body);

  Battery.update({'regeneration._id': req.body._id}, {'$set': {
    'regeneration.$.startDate': req.body.startDate,
    'regeneration.$.endDate': req.body.endDate,
    'regeneration.$.programAuto': req.body.programAuto,
    'regeneration.$.programManual': req.body.programManual,
    'regeneration.$.pulse': req.body.pulse,
    'regeneration.$.pause': req.body.pause,
    'regeneration.$.chargeProgram': req.body.chargeProgram,
    'regeneration.$.chargeTime': req.body.chargeTime
}}, function(err,battery) { 

        if(err){
          console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
        
})

})


router.post('/updateRegenerationDatabyId',function(req,res){
 
  console.log(req.body);

  Battery.update({'regeneration._id': req.body._id}, {'$set': {
    'regeneration.$.startDate': req.body.startDate,
    'regeneration.$.endDate': req.body.endDate,
    'regeneration.$.programAuto': req.body.programAuto,
    'regeneration.$.programManual': req.body.programManual,
    'regeneration.$.pulse': req.body.pulse,
    'regeneration.$.pause': req.body.pause,
    'regeneration.$.chargeProgram': req.body.chargeProgram,
    'regeneration.$.chargeTime': req.body.chargeTime
}}, function(err,battery) { 

        if(err){
          console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
        
})

})


router.post('/updateDischargingDatabyId',function(req,res){
   console.log('updateDischargingDatabyId')
  console.log(req.body);

  Battery.update({'discharging._id': req.body._id}, {'$set': {
    'discharging.$.gravity': req.body.gravity,
    'discharging.$.capacity': req.body.capacity,
    'discharging.$.endTime': req.body.endTime,
    'discharging.$.startTime': req.body.startTime,
    'discharging.$.startCurrent': req.body.startCurrent,
    'discharging.$.startVoltage': req.body.startVoltage,
    'discharging.$.endCurrent': req.body.endCurrent,
    'discharging.$.endVoltage': req.body.endVoltage,
    'discharging.$.discharger': req.body.discharger
    
}}, function(err,battery) { 

        if(err){
          console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
        
})

})


router.post('/updateChargingDatabyId',function(req,res){
  console.log('updateChargingDatabyId');
  console.log(req.body);

  Battery.update({'charging._id': req.body._id}, {'$set': {
    'charging.$.gravity': req.body.gravity,
    'charging.$.endTime': req.body.endTime,
    'charging.$.startTime': req.body.startTime,
    'charging.$.startCurrent': req.body.startCurrent,
    'charging.$.startVoltage': req.body.startVoltage,
    'charging.$.endCurrent': req.body.endCurrent,
    'charging.$.endVoltage': req.body.endVoltage,
    'charging.$.charger': req.body.charger
    
}}, function(err,battery) { 

        if(err){
          console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
        
})

})




router.post('/updateDispatchDatabyBatteryId',function(req,res){
  console.log('inside updateDispatchDatabyBatteryId')
   var data = req.body;
   data.dispatchDate = new Date();

    Battery.findOneAndUpdate({ _id : data.id},{$set:{dispatch:data.dispatch,dispatchType:data.dispatchType,dispatchDate:data.dispatchDate}},{new: true},function(err,battery){
        if(err){
          console.log('error occured');
          res.json({success:false,data:err})
        }else{
          res.json({success:true, data: battery})
        }
  })

});


module.exports = router;