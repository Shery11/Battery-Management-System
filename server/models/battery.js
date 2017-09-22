var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BatterySchema = new Schema({
   
    batterySerialNo : {type: String, required : true},
    labSerialNo:{ type:String, required:true },
    volt:{ type:String, required:true },
    resistance:{ type:String, required:true },
    remarks:{ type:String},
    dispatch: {type: Boolean , default:false},
    dispatchType : {type:String,enum: ['good', 'bad','pending'],default:'pending'},
    dispatchDate: {type: Date},
    charging :[{
        startVoltage : {type : String,default:"-"},
        endVoltage : {type : String,default:"-"},
        startCurrent : {type : String,default:"-"},
        endCurrent : {type : String,default:"-"},
        startTime : {type : String,default:"-"},
        endTime : {type : String,default:"-"},
        charger : {type : String,default:"-"},
        gravity : {type : String,default:"-"},
        createdAt:{ type: Date,default: Date.now}
        
    }],
    regeneration :[{
        startDate : {type : String,default:"-"},
        endDate : {type : String,default:"-"},
        programAuto : {type : String ,default:"-"},
        programManual : {type : String,default:"-"},
        pulse : {type : String,default:"-"},
    	pause : {type : String,default:"-"},
    	chargeProgram : {type : String,default:"-"},
    	chargeTime : {type : String,default:"-"},
    	createdAt : {type : Date, default:Date.now}
    }],
    discharging :[{ 

        startVoltage : {type : String,default:"-"},
        endVoltage : {type : String,default:"-"},
        startCurrent : {type : String,default:"-"},
        endCurrent : {type : String,default:"-"},
        startTime : {type : String,default:"-"},
        endTime : {type : String,default:"-"},
        discharger : {type : String,default:"-"},
        gravity : {type : String,default:"-"},
        capacity : {type : String,default:"-"},
        createdAt:{ type: Date,default: Date.now}
    }],
    batteryModel : {type : Schema.Types.ObjectId , ref: 'BatteryModel',required : true},
    batteryOrder : {type : Schema.Types.ObjectId , ref: 'Orders',required : true},
    batteryClient : {type : Schema.Types.ObjectId, ref: 'Client',required : true},
    createdAt:{ type: Date,default: Date.now}
});

module.exports = mongoose.model('Battery', BatterySchema);
