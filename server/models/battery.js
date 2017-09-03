var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BatterySchema = new Schema({
    batterySerialNo : {type: String, required : true},
    labSerialNo:{ type:String, required:true },
    charging :[{
        startVoltage : {type : String, required : true},
        endVoltage : {type : String, required : true},
        startCurrent : {type : String, required : true},
        endCurrent : {type : String, required : true},
        startTime : {type : String, required : true},
        endTime : {type : String, required : true},
        charger : {type : String, required : true},
        createdAt:{ type: Date,default: Date.now}
        
    }],
    regeneration :[{
    	v : {type : String, required : true },
    	i : {type : String, required : true},
    	ir : {type : String, required : true},
    	chargingTime : {type : String, required : true},
    	createdAt : {type : Date, default:Date.now},
    }],
    discharging :[{ 

        startVoltage : {type : String, required : true},
        endVoltage : {type : String, required : true},
        startCurrent : {type : String, required : true},
        endCurrent : {type : String, required : true},
        startTime : {type : String, required : true},
        endTime : {type : String, required : true},
        discharger : {type : String, required : true},
        capacity : {type : String, required : true},
        createdAt:{ type: Date,default: Date.now}
    }],
    batteryModel : {type : Schema.Types.ObjectId , ref: 'BatteryModel',required : true},
    batteryOrder : {type : Schema.Types.ObjectId , ref: 'Orders',required : true},
    batteryClient : {type : Schema.Types.ObjectId, ref: 'Client',required : true},
    createdAt:{ type: Date,default: Date.now}
});

module.exports = mongoose.model('Battery', BatterySchema);
