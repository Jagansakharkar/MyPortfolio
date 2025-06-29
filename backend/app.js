const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only requests from this origin
  methods: 'GET,POST',
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
// to get access to the data passed from frontend in JSON format
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome");
});

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ensure the correct email service is used
  auth: {
    user: process.env.MYEMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/send-mail', (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log(`Received mail data: ${JSON.stringify(req.body)}`); // Log received data

  const mailData = {
    from: email,
    to: process.env.MYEMAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.error("Error occurred while sending mail:", error); // Log error for debugging
      res.status(400).json({ success: false, message: "Error occurred while sending mail" });
    } else {
      res.status(200).json({ success: true, message: "Mail Sent Successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
