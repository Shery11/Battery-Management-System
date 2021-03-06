var express = require('express');
var router = express.Router();

var Client = require('../models/client.js');


router.post('/addClient',function(req,res){
	console.log('inside addClient route')
	var data = req.body;
    var client = new Client(data);
    // adding properties
	// client.name = data.name;
	// client.contactPerson = data.contactPerson;
	// client.jobTitle = data.jobTitle;
	// client.contactNumber = data.contactNumber;
	// client.mobileNumber = data.mobileNumber;
	// client.address = data.address;


    // saving in to db
	client.save(function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{
			res.json({success:true,data:doc})
		}
	})
});

router.get('/getAllClients',function(req,res){
  console.log("inside getAllClients route")

	Client.find({},function(err,doc){
		if(err){
			res.json({success:false, data:err})
		}else{
			res.json({success:true,data:doc})
		}
	})
});

router.post('/getClient',function(req,res){
	console.log('inside get single battery');

    var data = req.body; 

    Client.findOne({_id: data.id}).populate('orders').exec(function(err,doc){
		if(err){
           res.json({success:false,data:err})
		}else{
           res.json({success:true,data:doc})
		}
	})
})


module.exports = router;