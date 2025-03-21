// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello, GCP!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// To deploy:
// 1. Create a VM instance in GCP Compute Engine
// 2. SSH into the instance and install Node.js
// 3. Clone this project and run `npm install`
// 4. Start the server with `node server.js`
// 5. Configure firewall rules to allow traffic to port 8080