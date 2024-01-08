import {Link} from 'react-router-dom'

function SideBar (){
    const iconStyle = {
        fontSize: '1.5rem',
        color: 'cornflowerblue',
      };
    return (
        <nav>
				<section className="dicover">
					<h3>Menú</h3>
					<ul>
                        <li>
                            <Link to="/estadisticas">
                                <i className="bi bi-graph-up"></i>
                                - Estadísticas
                            </Link>
						</li>
						<li>
                            <Link to="/productos">
								<i className="bi bi-play-circle" style={iconStyle}></i>
								- Productos
							</Link>
						</li>
						<li>
                            <Link to="/marcas">
                                <i className="bi bi-graph-up"></i>
                                - Marcas
                            </Link>
						</li>
						<li>
                            <Link to="/ultproducto">
								<i className="bi bi-person" style={iconStyle}></i>
								- Último producto
							</Link>
						</li>
                        <li>
                            <Link to="/ultusuario">
								<i className="bi bi-play-circle" style={iconStyle}></i>
								- Último usuario 
							</Link>
						</li>
					</ul>
				</section>
			</nav>
    )
}

export default SideBar