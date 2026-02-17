import './nav.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav-bar'>
            <NavLink className="nav-bar__link" to="/profile">Profile</NavLink>
            <NavLink className="nav-bar__link" to="/messages">Messages</NavLink>
            <NavLink className="nav-bar__link" to="/friends">Friends</NavLink>
        </div>
    );
}

export default NavBar