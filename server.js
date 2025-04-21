const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: '*', // Allow requests from all domains
  optionsSuccessStatus: 200, // For compatibility
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Email sending logic using Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io', // Example SMTP server
      port: 2525, // Example port
      secure: false, // or 'STARTTLS'
      auth: {
        user: process.env.MAILTRAP_USERNAME, // Use environment variable
        pass: process.env.MAILTRAP_PASSWORD, // Use environment variable
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: 'candy@pacificagriscience.com', // Recipient's email
      subject: subject,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Error sending email' });
  }
});

// Export handler for AWS Lambda
exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: body.email,
      to: 'recipient-email@example.com',
      subject: body.subject,
      text: `From: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nCompany: ${body.company}\n\n${body.message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};

// Run locally on port 3001 if not in AWS Lambda environment
if (process.env.NODE_ENV !== 'production') {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}
