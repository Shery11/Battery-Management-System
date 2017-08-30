var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name : {type: String, required : true},
    phone:{ type:String, required:true },
    address :{type: Object, required:true},
    createdAt:{type: Date,default: Date.now}
});

module.exports = mongoose.model('Client', ClientSchema);
