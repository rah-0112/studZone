const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const init = require('./init');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

init();

app.get("/", (req, res) => {
    res.status(200).send("Hello studZone API");
});

app.listen(PORT, (err) => {
    if (err)
        console.error(err);
    else
        console.log(`Server running in port ${PORT}`);
})