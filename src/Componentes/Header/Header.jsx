//los componentes siempre inician con mayuscula
import "./Header.css";
import  logo  from "../../../public/assets/images/logo.jpeg";
function Header() {
    return (
        <>
            <header className="header">
                <img
                alt="Magical Mexico Logo"
                className="header__logo"
                src={ logo }
                />
                <h1>México Magico</h1>
            </header>
        </>
    )
}

export default Header;
