const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "../public")))

const PORT = 3002;
app.listen(PORT, ()=> {
    console.log(`Puerto ${PORT} encendido`)
})

app.get("/carrito", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productCart.html"))
})

app.get("/detalles-de-producto", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productDetails.html"))
})
