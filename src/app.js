const express = require("express");
const path = require("path")
const app = express();
const mainRouter = require("./routes/main-routes")

const PORT = 3002;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server en puerto ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "../public")))

app.use(mainRouter)
