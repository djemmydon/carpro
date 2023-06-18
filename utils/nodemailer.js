import nodemailer from "nodemailer";

const email = process.env.NEXT_APP_EMAIL;
const pass = process.env.NEXT_APP_EMAIL_PASS;

console.log(email, pass)

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};