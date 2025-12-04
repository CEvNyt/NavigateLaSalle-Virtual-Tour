// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle SPA routing (all requests serve index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
