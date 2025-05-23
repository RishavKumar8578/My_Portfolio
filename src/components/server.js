const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/send-sms", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const sms = await client.messages.create({
      body: `New Contact Form Message:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE,   // Your Twilio number
      to: "+918578828905"              // Receiver number
    });

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
