const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  description: String,

  deptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dept",
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Emp",
    required: true
  },

  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Emp"
    }
  ],

  status: {
    type: String,
    enum: ["planned", "active", "completed", "on-hold", "cancelled"],
    default: "planned"
  },

  startDate: Date,
  endDate: Date
},
{ timestamps: true }

);
projectSchema.index({ deptId: 1 });

module.exports = mongoose.model("Project",projectSchema)