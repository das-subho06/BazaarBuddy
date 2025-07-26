import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
 userType: 
 { type: String, 
    enum: ['vendor', 'customer'], 
    required: true },
  fullName: 
  { type: String, 
    required: true },
  email: 
  { type: String, 
    required: true, 
    unique: true },
  phone: 
  { type: String, 
    required: true },
  password: 
  { type: String, 
    required: true },
  businessName: 
  { type: String },
  location: 
  { type: String },
  category: 
  { type: String },

  lastLogin:{
        type:Date,
        default:Date.now

    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken: String,
    verificationTokenExpiresAt:Date,
}, { timestamps: true });


export const User= mongoose.model('User',userSchema);