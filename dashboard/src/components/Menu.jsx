import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../assets/img/logo.png'
import SideBar from './SideBar';

function Menu(){
    return (
        <header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<img src={logo} alt="Logo Digital House	"/>
				</div>
				<Route path="/">
					<Link to="/">
						<figcaption>
							Animalandia
						</figcaption>
					</Link>
				
				</Route>
			</figure>
			<SideBar />
		</header>
    )
}

export default Menu