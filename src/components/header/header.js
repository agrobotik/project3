import logo from '../../images/logo.webp';


function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} />
        </div>
    );
}

export default Header;