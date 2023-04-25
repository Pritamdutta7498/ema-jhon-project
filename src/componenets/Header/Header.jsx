
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {

  return (
    <nav className="header">
      <img src={logo} />
      <div className="all-nav">
      <a href="/shop">Shop</a>
      <a href="/order">Order</a>
      <a href="/inventory">Inventory</a>
      <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
//            {/* a*4[href=$]{$} --snippet*/ }
