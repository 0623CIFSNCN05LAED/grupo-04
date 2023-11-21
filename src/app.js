const express = require("express");
const path = require("path")
const methodOverride = require("method-override")
const app = express();

const PORT = 3002;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server en puerto ${PORT}`);
});
app.use(express.json())
app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const mainRouter = require("./routes/main")
app.use("/", mainRouter)

