import { useState,useEffect} from "react";
import slaq from "./images/slaq.png";
import Usflag from "./images/usflag.png";
import cart from "./images/shopping-cart 1.png";
import search from "./images/Search16px.png";
import Ruflag from "./images/ruflag.png";
import Armflag from "./images/armflag.png";
function Header() {
  const [change, setChange] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cahngeFlag, setChangeFlag] = useState(Usflag);

  useEffect(() => {
    console.log("redner");
  }, [cahngeFlag]);
  return (
    <header>
      <div className="header-nav">
        <p>SWAY</p>
        <nav>
          <ul id="clickLii">
            <li>
              Demos
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Pages
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Portfolio
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Blog
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Shop
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Blocks
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Elements
              <img src={slaq} alt="slaq" />
            </li>
            <li>
              Extra
              <img src={slaq} alt="slaq" />
            </li>
          </ul>
        </nav>
        <div className="options">
          <img
            onClick={() => {
              setChange(!change);
              setOpenCart(false);
            }}
            src={cahngeFlag}
            alt="usflag"
          />
          <img
            onClick={() => {
              setOpenCart(!openCart);
              setChange(false);
            }}
            src={cart}
            alt="cart"
          />
          <img src={search} alt="search" />
        </div>
        <div className={openCart ? "openCart active" : "openCart"}>
          <div>
            <p>Cart</p>
            <p
              onClick={() => {
                setOpenCart(false);
              }}
            >
              X
            </p>
          </div>
        </div>

        <div className={change ? "changeLanguage active" : "changeLanguage"}>
          <div>
            <img
              onClick={() => {
                setChangeFlag(Usflag);
                setChange(false);
              }}
              src={Usflag}
              alt="usflag"
            />
            <p>Us</p>
          </div>
          <div>
            <img
              onClick={() => {
                setChangeFlag(Ruflag);
                setChange(false);
              }}
              src={Ruflag}
              alt="ruflag"
            />
            <p>Russian</p>
          </div>
          <div>
            <img
              onClick={() => {
                setChangeFlag(Armflag);
                setChange(false);
              }}
              src={Armflag}
              alt="armflag"
            />
            <p>Armenian</p>
          </div>
        </div>
        <button className="registerBtn">Register</button>
      </div>
      <div className="about_content">
        <p>Catering should be an experience</p>
        <h1>We use only the finest and freshest ingredients</h1>
        <b>
          At Sway catering we know that food is an important part of life. If
          the meal is not perfect, your event cannot be perfect.
        </b>
        <button>Request a Quote</button>
      </div>
    </header>
  );
}
export default Header;
