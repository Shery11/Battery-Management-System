var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BatterySchema = new Schema({
    batterySerialNo : {type: String, required : true},
    labSerialNo:{ type:String, required:true },
    volt:{ type:String, required:true },
    resistance:{ type:String, required:true },
    remarks:{ type:String, required:true },
    charging :[{
        startVoltage : {type : String},
        endVoltage : {type : String},
        startCurrent : {type : String},
        endCurrent : {type : String},
        startTime : {type : String},
        endTime : {type : String},
        charger : {type : String},
        gravity : {type : String},
        createdAt:{ type: Date,default: Date.now}
        
    }],
    regeneration :[{
        startDate : {type : String},
        endDate : {type : String},
        programAuto : {type : String },
        programManual : {type : String},
        pulse : {type : String},
    	pause : {type : String},
    	chargeProgram : {type : String},
    	chargeTime : {type : String},
    	createdAt : {type : Date, default:Date.now}
    }],
    discharging :[{ 

        startVoltage : {type : String},
        endVoltage : {type : String},
        startCurrent : {type : String},
        endCurrent : {type : String},
        startTime : {type : String},
        endTime : {type : String},
        discharger : {type : String},
        gravity : {type : String},
        capacity : {type : String},
        createdAt:{ type: Date,default: Date.now}
    }],
    batteryModel : {type : Schema.Types.ObjectId , ref: 'BatteryModel',required : true},
    batteryOrder : {type : Schema.Types.ObjectId , ref: 'Orders',required : true},
    batteryClient : {type : Schema.Types.ObjectId, ref: 'Client',required : true},
    createdAt:{ type: Date,default: Date.now}
});

module.exports = mongoose.model('Battery', BatterySchema);
