const express = require("express");
//const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
   res.send("OTA API Server running!!");
});

app.use("/apk", express.static("apk"));

app.get("/api/latest", (req, res) => {

    //const data = JSON.parse(
    //    fs.readFileSync("version.json")
    //);

    res.json({
        latest_version: 7,
        apk_url: "https://panel-ota-api.onrender.com/apk/panel_app_v1.0.0.apk"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("OTA server running on port" + PORT);
});
