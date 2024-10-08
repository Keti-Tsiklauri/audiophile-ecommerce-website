import XX59 from "../components/XX59";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./headphones.module.css";
import XX99MarkI from "../components/XX99MarkI";
import XX99MarkII from "../components/XX99MarkII";
import { useGlobalContext } from "../context/GlobalContext";

export default function Headphones() {
  const { toggle, setToggle } = useGlobalContext();
  function Toggle() {
    setToggle?.(true);
  }
  return (
    <div>
      <Navbar />

      <div
        className={`${toggle ? "" : styles.opacity} ${styles.container}`}
        onClick={Toggle}
      >
        <p className={styles.p}>HEADPHONES</p>
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <XX99MarkII />
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <XX99MarkI />
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <XX59 />
      </div>
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <Footer />
      </div>
    </div>
  );
}
