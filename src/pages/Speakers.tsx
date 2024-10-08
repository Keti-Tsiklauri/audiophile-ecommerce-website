import Footer from "../components/Footer";
import styles from "../components/headphones.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
export default function Speakers() {
  const { toggle, setToggle } = useGlobalContext();
  function Toggle() {
    setToggle?.(true);
  }
  return (
    <div>
      <Navbar />
      <div
        onClick={Toggle}
        className={`${toggle ? "" : styles.opacity}`}
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
          SPEAKERS
        </p>
      </div>
      <div
        className={`${toggle ? "" : styles.opacity} ${styles.box1}`}
        onClick={Toggle}
      >
        <div className={styles.div1}>
          <img src="\assets\product-zx9-speaker\desktop\image-product.jpg"></img>
        </div>
        <div className={styles.div2}>
          <p>NEW PRODUCT</p>
          <p>ZX9 SPEAKER</p>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link to="./ZX9" className={styles.buttonFirst}>
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div
        className={`${toggle ? "" : styles.opacity} ${styles.box2}`}
        onClick={Toggle}
      >
        <div className={styles.div3}>
          <p>ZX7 SPEAKER</p>
          <p>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link to="./ZX7" className={styles.buttonSecond}>
            SEE PRODUCT
          </Link>
        </div>
        <div className={styles.div4}>
          <img src="\assets\product-zx7-speaker\desktop\image-product.jpg"></img>
        </div>
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <Footer />
      </div>
    </div>
  );
}
