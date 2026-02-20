import mongoose from "mongoose";

const trackedJobSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    company: {
        type: String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type: String,
        enum:['APPLIED','INTERVIEW','REJECTED','OFFER'],
        default: 'APPLIED' 
    },
    appliedDate:{
        type: Date,
        required:true
    },
    notes:{
        type: String,
        trim:true
    },
    jobLink:{
        type: String,
        trim: true
    },
    salaryOffered:{
        type: Number,
    }
},{
    timestamps:true
});

trackedJobSchema.index({ user: 1 });

export default mongoose.model("TrackedJob", trackedJobSchema);