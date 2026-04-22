const mongoose = require('mongoose')
const deptSchema = new mongoose.Schema(
    {

        name : { type : String, required : true },
        location : { type : String, required : true },
        budget : {type: Number, required:true},
        hod : { type : String, required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Dept",deptSchema)