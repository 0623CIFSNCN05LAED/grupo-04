const express = require("express");
const path = require("path")
const methodOverride = require("method-override")
const session = require("express-session")
const viewMiddleware = require("./middlewares/view-middle")
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

app.use(session({
      secret: "animalandia",
      resave: false, // si lo ponemos en true va a guardar aunque no haya cambios
      saveUninitialized: false, 
    })
  );

app.use(viewMiddleware) // AGREGAR LOS BOTONES DE CRUD EN LAS VISTAS PARA APLICAR EL IF EJS Y QUE APAREZCAN SOLO CON SESION INICIADA

const mainRouter = require("./routes/main")
app.use("/", mainRouter)

