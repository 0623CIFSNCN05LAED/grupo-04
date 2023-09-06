const express = require("express");
const path = require("path")
const app = express();



app.set('view engine', 'ejs');

app.use(express.static("public"))

app.use(express.static(path.join(__dirname, "../public")))

const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
    console.log("Server en puerto 3001");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/carrito", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productCart.html"))
});
