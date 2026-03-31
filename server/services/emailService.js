import createTransporter from '../configs/nodemailer.js';

export const sendBookingEmail = async (to, mailBody) => {
    const transporter =  await createTransporter();
    
    await transporter.sendMail({
    from: process.env.GOOGLE_USERNAME, // sender address
    to, // list of recipients
    subject: "Hotel Booking Details", // subject line
    html: mailBody,
  });
};
