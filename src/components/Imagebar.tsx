import { Link } from "react-router-dom";
import styles from "./imagebar.module.css";
export default function Imagebar() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          className={styles.image}
        ></img>
        <p>HEADPHONES</p>
        <div className={styles.box2}>
          <Link to="./XX99MarkI" className={styles.link}>
            <p>SHOP</p>
          </Link>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            className={styles.icon}
          ></img>
        </div>
      </div>
      <div className={styles.box}>
        <img
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          className={styles.image}
        ></img>
        <p>SPEAKERS</p>
        <div className={styles.box2}>
          <Link to="./ZX9" className={styles.link}>
            {" "}
            <p>SHOP</p>
          </Link>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            className={styles.icon}
          ></img>
        </div>
      </div>
      <div className={styles.box}>
        <img
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          className={styles.image}
        ></img>
        <p>EARPHONES</p>
        <div className={styles.box2}>
          <Link to="./YX1" className={styles.link}>
            <p>SHOP</p>
          </Link>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            className={styles.icon}
          ></img>
        </div>
      </div>
    </div>
  );
}
