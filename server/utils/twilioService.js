import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendOTP = async (req, res) => {
  const { phone } = req.body;
  try {
    const verification = await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({ to: phone, channel: 'sms' });

    res.status(200).json({ success: true, message: 'OTP sent', sid: verification.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send OTP', error });
  }
};

export const verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;
  try {
    const verificationCheck = await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status === 'approved') {
     
      return res.status(200).json({ success: true, message: 'Phone verified' });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Verification failed', error });
  }
};
