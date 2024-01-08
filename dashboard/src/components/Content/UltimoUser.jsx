import { Component } from "react"

class LastUser extends Component{
  constructor(props){
    super(props)

    this.state = {
      user:[],
    }
  } 

  componentDidMount(){
    fetch('http://localhost:3002/api/usuarios').then((res)=>{
      return res.json()
    }).then((json)=>{
      const usuarios= json.data
      const last = usuarios.pop()
      console.log("usuarios", last)
      this.setState({user: last})
    })
  }
  render(){
    return(
      <section className="content">
        <h2 className="mt-3">Usuario Nuevo</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Este es el usuario más nuevo 
          </button>
            <button
            type="button"
            className="list-group-item list-group-item-action text-center">
                {this.state.user.name}
          </button>
            <div
                className="list-group-item list-group-item-action text-center">
                <p>Email: {this.state.user.email}</p>
                <p>Nombre: {this.state.user.name}</p>
                <p>DNI: {this.state.user.dni}</p>
                <p>Dirección: {this.state.user.home}</p>
                <p>Contacto: {this.state.user.phone_number}</p>
            </div>
        </div>
      </section>
    )
  }
}

export default LastUser