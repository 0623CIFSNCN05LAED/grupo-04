import { Component } from "react"

class LastProd extends Component{
  constructor(props){
    super(props)

    this.state = {
      product:[],
    }
  } 

  componentDidMount(){
    fetch('http://localhost:3002/api/productos').then((res)=>{
      return res.json()
    }).then((json)=>{
      const productos= json.data
      const last = productos.pop()
      console.log("productos", last)
      this.setState({product: last})
    })
  }
  render(){
    return(
      <section className="content">
        <h2 className="mt-3">Producto Nuevo</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Este es el producto más nuevo 
          </button>
            <button
            type="button"
            className="list-group-item list-group-item-action text-center">
                {this.state.product.name}
          </button>
            <div
                className="list-group-item list-group-item-action text-center">
                <p>Sabor: {this.state.product.taste}</p>
                <p>Peso: {this.state.product.weight}</p>
                <p>Categoría: {this.state.product.category}</p>
                <p>Descripción: {this.state.product.description}</p>
                <p>Precio: ${this.state.product.price}</p>
            </div>
        </div>
      </section>
    )
  }
}

export default LastProd