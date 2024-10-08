import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../components/headphones.module.css";
import { useGlobalContext } from "../context/GlobalContext";
export default function Earphones() {
  const { toggle, setToggle } = useGlobalContext();
  function Toggle() {
    setToggle?.(true);
  }
  return (
    <div>
      <Navbar />
      <div
        onClick={Toggle}
        className={`${toggle ? "" : styles.opacity} ${styles.container}`}
        style={{
          backgroundColor: "black",
          height: "236px",
          marginTop: "0",
          paddingTop: "0",
          marginBottom: "100px",
        }}
      >
        <p
          style={{
            marginTop: "0",

            marginLeft: "580px",
            paddingTop: "95px",
            width: "283px",

            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "44px",

            textAlign: "center",
            letterSpacing: "1.42857px",
            textTransform: "uppercase",

            color: "#FFFFFF",
          }}
        >
          EARPHONES
        </p>
      </div>
      <div
        className={`${toggle ? "" : styles.opacity} ${styles.container}`}
        onClick={Toggle}
      >
        <div className={styles.box1}>
          <div className={styles.div1}>
            <img src="\assets\product-yx1-earphones\desktop\image-product.jpg"></img>
          </div>
          <div className={styles.div2}>
            <p>NEW PRODUCT</p>
            <p>YX1 WIRELESS EARPHONES</p>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link to="./YX1" className={styles.buttonFirst}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
