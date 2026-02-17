import logo from '../../images/logo.webp';
import './header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='s' />
            <h1 className='header__title'>Vkontakte</h1>
        </div>
    );
}

export default Header;