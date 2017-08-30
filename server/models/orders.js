var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    clientId : {type:Schema.Types.ObjectId, ref:'Client',required:true},
    createdAt: {type: Date,default: Date.now}
});

module.exports = mongoose.model('Orders', OrderSchema);
