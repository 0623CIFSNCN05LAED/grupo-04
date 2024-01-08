import { Component } from "react";


const marcas = [
  {id: 1, name: "Royal Canin"},
  {id: 2, name: "Excellent"},
  {id: 3, name: "Pedigree"},
  {id: 4, name: "Eukanuba"},
  {id: 5, name: "Cat Chow"},
  {id: 6, name: "Dog chow"},
  {id: 7, name: "Pro Plan"}
]
//las clases son planos de como son los objetos para reutillizar código. Al consructor le pasamos lo que recibe esa clase
class Box extends Component{
  constructor(props){
    super(props)

    this.state = {
      val:[],
      valores: []
    }
  } 

  componentDidMount(){
    fetch('http://localhost:3002/api/productos').then((res)=>{
      return res.json()
    }).then((json)=>{
      const productos= json.data
      console.log("productos", productos)
      this.setState({val: productos})
    })
    fetch('http://localhost:3002/api/usuarios').then((res)=>{
      return res.json()
    }).then((json)=>{
      const usuarios= json.data
      console.log("usuarios", usuarios)
      this.setState({valores: usuarios})
    })
    
  }

  render(){
    return (
      <>
      <div className="info-box">
        <div className="box-content">
          <span className="big">{this.state.val.length}</span>
            Productos
        </div>
      </div>
      <div className="info-box">
        <div className="box-content">
            <span className="big">{this.state.valores.length}</span>
            Usuarios
        </div>
      </div>
      <div className="info-box">
        <div className="box-content">
            <span className="big">{marcas.length}</span>
            Marcas
        </div>
      </div>
      </>
        
    )
   }

}
export default Box