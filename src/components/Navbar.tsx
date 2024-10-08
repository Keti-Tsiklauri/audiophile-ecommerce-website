import Cart from "./Cart";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import image from "C:/Users/Lenovo/Desktop/project--3/icon-cart.svg";

import { useGlobalContext } from "../context/GlobalContext";
export default function Navbar() {
  const { toggle, setToggle } = useGlobalContext();
  return (
    <div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div>
            <p>audiophile</p>
          </div>
          <div className={styles.nav}>
            <p>
              <Link to="/">HOME</Link>
            </p>
            <p>
              <Link to="/Headphones">HEADPHONES</Link>
            </p>
            <p>
              <Link to="/Speakers">SPEAKERS</Link>
            </p>
            <p>
              {" "}
              <Link to="/Earphones">EARPHONES</Link>
            </p>
          </div>
          <div className={styles.image}>
            <img
              src={image}
              alt="icon"
              width="100px"
              onClick={() => setToggle?.((prev) => !prev)}
            />
          </div>
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "white",

            marginLeft: "165px",
            width: "1110px",
            marginRight: "165px",
          }}
        ></div>
      </div>
      <div
        className={`${styles.top} ${styles.absolute}
        ${toggle ? styles.hide : ""}`}
      >
        <Cart />
      </div>
    </div>
  );
}
