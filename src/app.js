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


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.ejs"));
});

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.ejs"))
})

app.get("/productos", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productos.ejs"))
})

app.get("/carrito", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productCart.ejs"))
})

app.get("/detalles-de-producto", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productDetails.ejs"))
})

app.use(mainRouter)
