const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "../public")))

<<<<<<< HEAD
const PORT = 3002;
app.listen(PORT, ()=> {
    console.log(`Puerto ${PORT} encendido`)
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
=======
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
    console.log("Server en puerto 3001");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/carrito", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productCart.html"))
})

app.get("/detalles-de-producto", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productDetails.html"))
})

>>>>>>> ed461d630809d20cefdd78d32afa15360c0e744b
