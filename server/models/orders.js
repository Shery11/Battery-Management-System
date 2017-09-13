var mongoose = require('mongoose');



var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var connection = mongoose.createConnection("mongodb://dms:laughnplay@ds125914.mlab.com:25914/bms");

autoIncrement.initialize(connection);

var OrderSchema = new Schema({
    clientId : {type:Schema.Types.ObjectId, ref:'Client',required:true},
    createdAt: {type: Date,default: Date.now},
    orderId : {type: Number, required: true},
    siteIncharge : {type: String, required:true},
    contactPerson : {type: String, required:true},
    collectionAddress : {type: String, required:true}
});



OrderSchema.plugin(autoIncrement.plugin, {
    model: 'Orders',
    field: 'orderId',
    startAt: 1,
    incrementBy: 1  
});

module.exports = mongoose.model('Orders', OrderSchema);
