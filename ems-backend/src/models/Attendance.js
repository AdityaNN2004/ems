const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    empid: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'emp' 
    },
    date: { 
      type: Date, 
      required: true 
    },
    checkin: { 
      type: Date, 
      required: true 
    },
    checkout: { 
      type: Date, 
      required: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("attendance", attendanceSchema);
