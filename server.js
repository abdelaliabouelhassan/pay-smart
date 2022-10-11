import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, process.env.HOST);
console.log("Server Starded on port : " + port);