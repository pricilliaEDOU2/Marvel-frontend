import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="Logo Marvel" />
          </Link>
          <div className="nav-header">
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/favories">Favoris</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
