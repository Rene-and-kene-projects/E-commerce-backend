/* eslint-disable import/no-named-as-default */
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';
// dotenv config to acces env variables
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
});

export const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Across the Globe',
    link: 'https://www.atg.world/'
  }
});

export default { transporter, mailGenerator };
