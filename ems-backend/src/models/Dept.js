const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    budget: {
      type: Number,
      required: true,
      min: 0
    },

    headOfDept: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Emp'
    },

    description: {
      type: String,
      default: ''
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Index for faster lookup


module.exports = mongoose.model('Dept', deptSchema);