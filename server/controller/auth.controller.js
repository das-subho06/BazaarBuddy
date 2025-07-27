import bcrypt from 'bcrypt';
import { User } from '../model/user.model.js';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


// REGISTER USER

export const registerUser = async (req, res) => {
  try {
    const {
      userType,
      fullName,
      email,
      phone,
      password,
      businessName,
      location,
      category,
    } = req.body;

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in DB
    const newUser = new User({
      userType,
      fullName,
      email,
      phone,
      password: hashedPassword,
      businessName: userType === 'vendor' ? businessName : '',
      location: userType === 'vendor' ? location : '',
      category: userType === 'vendor' ? category : '',
      isVerified: false,
    });

    await newUser.save();

    // Send OTP 
    await client.verify.v2.services(process.env.TWILIO_VERIFY_SID).verifications.create({
      to: phone,
      channel: 'sms',
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully. OTP sent to phone number.',
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


// VERIFY PHONE OTP

export const verifyPhone = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    // Validate input
    if (!phone || !otp) {
      return res.status(400).json({ message: 'Phone and OTP are required' });
    }

    // Verify OTP using Twilio Verify API
    const verificationCheck = await client.verify.v2
        .services(process.env.TWILIO_VERIFY_SID)
        .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status !== 'approved') {
      return res.status(400).json({ message: 'Invalid or expired verification code' });
    }

    // OTP approved — now update user verification status
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isVerified = true;
    await user.save();

    // Return success with optional user data
    res.status(200).json({ success: true, message: 'Phone number verified successfully', user });
  } catch (error) {
    console.error('Verify Phone Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     if (!user.isVerified) {
//       return res.status(403).json({ message: 'Phone number not verified' });
//     }

//     // You can issue JWT token here if needed

//     res.status(200).json({
//       success: true,
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         phone: user.phone,
//         userType: user.userType,
//       },
//     });
//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

