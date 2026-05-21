const { default: mongoose } = require("mongoose");

const attendanceSchema = new mongoose.Schema(
{
  empId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Emp",
    required: true,
    index: true
  },

  date: {
    type: Date,
    required: true
  },

  checkIn: {
    type: Date,
    required: true
  },

  checkOut: {
    type: Date
  },

  status: {
    type: String,
    enum: ["present", "absent", "half-day"],
    default: "present"
  }
},
{ timestamps: true }
);
module.exports = mongoose.model("Attendance",attendanceSchema)