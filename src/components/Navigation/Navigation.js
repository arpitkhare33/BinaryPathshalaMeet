import {Link} from 'react-router-dom'
import './navigation.css'
function Navigation(){
    return (
        <div className="navbar">
            <h3>
                <Link className='logo' to="/"> Binary Pathshala </Link>
            </h3>
            <ul className='nav'>
                <li><Link className='nav-link' to="/"> Home </Link></li>
                <li><Link className='nav-link' to="/add">  Add Meetings </Link></li>
                <li><Link className='nav-link' to="/important"> Important Meetings </Link></li>
                <li><Link className='nav-link' to="/old"> Old Meetings </Link></li>
            </ul>
        </div>
    );
}

export default Navigation;