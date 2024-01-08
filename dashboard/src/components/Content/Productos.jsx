import LinkItem from './LinkItem'
import ProdItem from './ProdItem';
import { Route } from "react-router-dom";

import { Component } from "react";
//las clases son planos de como son los objetos para reutillizar código. Al consructor le pasamos lo que recibe esa clase
class Productos extends Component{
  constructor(props){
    super(props)

    this.state = {
      productos: []
    }
  } 

  componentDidMount(){
    fetch('http://localhost:3002/api/productos').then((res)=>{
      return res.json()
    }).then((json)=>{
      const productos= json.data
      console.log("productos", productos)
      this.setState({productos: productos})
    })
  }

  render(){
    return (
      <section className="content">
        <div>
            <h2 className="mt-3">Productos</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <button
                type="button"
                className="list-group-item list-group-item-action active text-center"
                aria-current="true"
              >
                Listado de productos
              </button>
              {this.state.productos.length === 0 ?
                "Cargando, por favor espere :)..." :
              this.state.productos.map((producto)=>(
                <LinkItem key={producto.id} name={producto.name} />
              ))}
            </div>
        </div>
        <div>
          <h2>Producto Seleccionado:</h2>
          <Route path="/productos/:name" component={ProdItem} />
        </div>
      </section>
    );
  }
}

export default Productos