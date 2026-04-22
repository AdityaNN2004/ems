const mongoose = require('mongoose')

const empSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        role:{type:String,required:true},
        salary:{type:Number,required:true},
        joiningDate:{type:Date,required:true},
        deptId:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Dept'
        },
        managerId :{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Emp"
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Emp",empSchema)