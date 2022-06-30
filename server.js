const express = require('express');
const path = require('path');

let init_path = __dirname;

const app = express();

hljs = require('highlight.js');

app.use(express.static(init_path));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(init_path, "index.html"));
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(init_path, "blog.html"));
// })

app.listen("3010", () => {
    console.log("listening...");
})