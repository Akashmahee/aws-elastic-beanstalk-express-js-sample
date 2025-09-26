const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World Akash here How are you guys from manual stage is enabled!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
