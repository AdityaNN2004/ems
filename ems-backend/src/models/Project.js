const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: { 
            type: String, 
            enum: ['planned', 'active', 'completed', 'on-hold'], 
            default: 'planned' 
        },
        // Link to Dept Model
        deptId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dept',
            required: true
        },
        // Array of links to Emp Model
        teamMembers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Emp'
        }],
        // Connection among projects (Self-Reference)
        relatedProjects: [{
            project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
            relationType: { 
                type: String, 
                enum: ['predecessor', 'successor', 'sub-project'],
                default: 'sub-project'
            }
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
