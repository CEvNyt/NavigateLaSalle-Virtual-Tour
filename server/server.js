const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// For any route, return index.html (needed for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
