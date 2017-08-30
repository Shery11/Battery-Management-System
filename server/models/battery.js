var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BatterySchema = new Schema({
    batterySerialNo : {type: String, required : true},
    labSerialNo:{ type:String, required:true },
    charging :[{type:Object}],
    Regeneration :[{type:Object}],
    discharging :[{type:Object}],
    batteryModel : {type : Schema.Types.ObjectId , ref: 'BatteryModel',required : true},
    batteryOrder : {type : Schema.Types.ObjectId , ref: 'Orders',required : true},
    batteryClient : {type : Schema.Types.ObjectId, ref: 'Client',required : true},
    createdAt:{ type: Date,default: Date.now}
});

module.exports = mongoose.model('Battery', BatterySchema);
