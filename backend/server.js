const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from React frontend
app.use(express.json()); // Parse JSON request bodies

// POST route to handle form submissions
app.post("/contact", (req, res) => {
  console.log("Received data:", req.body); // Log the received data

  const { firstName, lastName, email, phone, message } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ code: 400, status: "All fields are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ code: 400, status: "Invalid email format." });
  }

  // Mock email sending (or handle data as needed)
  console.log("Name:", firstName + " " + lastName);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  res.json({ code: 200, status: "Message received successfully" });
});

// Start the server
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
