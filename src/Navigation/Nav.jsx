import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

function Nav({ handleInputChange, query }) {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            className="search-input"
            placeholder="Enter your search shoes"
          />
        </div>

        <div>
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>

          <a href="#">
            <FaShoppingCart className="nav-icons" />
          </a>

          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
