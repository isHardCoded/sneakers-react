import "./Header.scss";
import { ShoppingCart } from "react-feather";
import { User } from "react-feather";
import { Heart } from "react-feather";

const Header = () => {
  return (
    <>
      <div className="wrapper-header">
        <div>
          <h1>Sneaker Shop</h1>
          <h2>The best sneakers in the world</h2>
        </div>
        <div className="header-links">
          <div>
            <ShoppingCart />
            <span>Cart</span>
          </div>
          <div>
            <Heart />
            <span>Favorite</span>
          </div>
          <div>
            <User />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
