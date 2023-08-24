const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "../public")))

app.listen(process.env.PORT || 3001, () => {
    console.log("Server en puerto 3001");
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});