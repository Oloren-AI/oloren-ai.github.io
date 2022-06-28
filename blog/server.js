const express = require('express');
const path = require('path');

let init_path = __dirname;

const app = express();

hljs = require('highlight.js');
html = hljs.highlightAuto('<h1>Hello World!</h1>').value

app.use(express.static(init_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(init_path, "home.html"));
})

app.listen("3010", () => {
    console.log("listening...");
})