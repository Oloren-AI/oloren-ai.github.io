const express = require('express');
const path = require('path');

let init_path = __dirname;

const app = express();
app.use(express.static(init_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(init_path, "home.html"));
})

app.listen("3000", () => {
    console.log("listening...");
})