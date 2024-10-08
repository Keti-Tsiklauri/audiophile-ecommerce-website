import styles from "./home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Imagebar from "../components/Imagebar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
export default function Home() {
  const navigate = useNavigate();

  const goToXX99MarkII = () => {
    navigate("/Headphones/XX99MarkII");
  };
  const { toggle, setToggle } = useGlobalContext();
  function Toggle() {
    setToggle?.(true);
  }
  return (
    <>
      <Navbar />
      <div
        className={`${toggle ? "" : styles.opacity} ${styles.container}`}
        onClick={Toggle}
      >
        <div className={styles.box1}>
          <p>NEW PRODUCT</p>
          <p>XX99 Mark II Headphones</p>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button onClick={goToXX99MarkII} className={styles.button}>
            See Product
          </button>
        </div>
        <div className={styles.box2}>
          <img src="\assets\product-xx99-mark-two-headphones\desktop\image-gallery-3.jpg"></img>
        </div>
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <Imagebar />
        <Section />
        <Footer />
      </div>
    </>
  );
}
