import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../helpers/StateProvider";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [{basket}, dispatch] = useStateValue();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/login"> Sign In </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
        <Link to="/logout"> Sign out </Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/login"> Sign In </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
        <Link to="/logout"> Sign out </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      </div>
  );
}

export default Navbar;
