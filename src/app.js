const express = require("express");
const path = require("path")
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "../public")))

const mainRouter = require("./routes/main")
app.use("/", mainRouter)

const PORT = 3002;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server en puerto ${PORT}`);
});
