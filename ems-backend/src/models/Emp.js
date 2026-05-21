const mongoose = require('mongoose');

const empSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },

    role: {
      type: String,
      enum: ['Admin', 'HR', 'Manager', 'Developer'],
      required: true
    },

    salary: {
      type: Number,
      required: true,
      min: 0
    },

    joiningDate: {
      type: Date,
      required: true
    },

    deptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dept',
      required: true
    },

    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Emp'
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Indexing for performance

empSchema.index({ deptId: 1 });

module.exports = mongoose.model('Emp', empSchema);