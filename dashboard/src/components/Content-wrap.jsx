import Statistics from "./Content/Estadisticas";
import Productos from "./Content/Productos";
import LastProd from "./Content/UltimoProd";
import LastUser from "./Content/UltimoUser";
import Marcas from "./Content/Marcas";
import prueba from "../assets/img/prueba.jpg";
import { Route, Switch } from "react-router-dom";

function ContentWrap(){
    return (
        <main className="content-wrap" 
        style={{maxHeight: "calc(100vh - 5rem)"}}>
            <Switch>
                <Route path="/" exact>
                    <h3><center>¡Bienvenido al dashboard de Animalandia!</center></h3>
                    <img src={prueba} />
                </Route>
                <Route path="/estadisticas">
                    <Statistics/>
                </Route> 
                <Route path="/productos">
                    <Productos/>
                </Route>
                <Route path="/marcas">
                    <Marcas/>
                </Route>
                <Route path="/ultproducto">
                    <LastProd/>
                </Route>
                <Route path="/ultusuario">
                    <LastUser/>
                </Route>
                <Route path="*">
                    <p>No pudimos encontrar la página que buscas :(</p>
                </Route>
            </Switch>
        </main>
    )
}

export default ContentWrap