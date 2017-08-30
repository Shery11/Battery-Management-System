var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BatteryModelSchema = new Schema({
	orderId : {type : Schema.Types.ObjectId , ref: 'Orders' ,required:true},
    brand : {type: String, required : true},
    model:{ type:String, required:true },
    volt : {type : String , required:true},
    amp : {type : String , required:true},
    createdAt:{ type: Date,default: Date.now}
});

module.exports = mongoose.model('BatteryModel', BatteryModelSchema);
