// Import the built-in http module
const http = require("http");

// Define the port to listen on
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response body
  res.end("Hello, World! This is my basic Node.js HTTP server.");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
