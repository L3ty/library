
import Logo from "../img/Logo.png"
import Search from "../img/Search.png"
import Pasta from "../img/Pasta.png"
import Heart from "../img/Heart.png"
import Profile from "../img/Profile.png"
import "./Header.css"

function Header() {
 return (
    <div className="navbar">

    <img src={Logo} alt="logo" width="150"/>

    <div>
   <div className="input-wrapper">
    <input type="text" placeholder="Pesquisar livro" />
    <img src={Search} alt="lupa" width="20"/>
   </div>
    </div>

    <div className="sidebar">
    <img src={Pasta} alt="pasta" />
    <img src={Heart} alt="coração" />
    <img src={Profile} alt="profile" />
    </div>

    </div>
 )
}

export default Header