const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create  new  geo schema to prevent messyness
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates : {
        type: [Number],
        index: "2dsphere"
    }
});

//create ninja schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required:(true,"Name field is required")
    },
    rank: {
        type: String
    },
    available:{
        type: Boolean,
        default:false
    },
    //add in geo location
    geometry : GeoSchema

});


const Ninja = mongoose.model("ninja", NinjaSchema);


module.exports = Ninja;