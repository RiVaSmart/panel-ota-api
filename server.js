const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    res.send("OTA API Server running!!");
});

app.get("/api/latest", (req, res) => {

    const data = JSON.parse(
        fs.readFileSync("version.json")
    );

    res.json(data.latest);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("OTA server running on port" + PORT);
});
