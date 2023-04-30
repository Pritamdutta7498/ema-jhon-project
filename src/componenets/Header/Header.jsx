
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="header">
      <img src={logo} />
      <div className="all-nav">
      <Link to="/">Shop</Link>
      <Link to="/orders">Order</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
//            {/* a*4[href=$]{$} --snippet*/ }
