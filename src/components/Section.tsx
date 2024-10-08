import styles from "./section.module.css";
import { useNavigate } from "react-router-dom";

export default function Section() {
  const navigate = useNavigate();

  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  const goToZX7 = () => {
    navigate("/Speakers/ZX7");
  };
  const goToYX1 = () => {
    navigate("/Earphones/YX1");
  };
  return (
    <div>
      <div className={styles.container1}>
        <div className={styles.box1}>
          <img
            src="/assets/home/desktop/image-speaker-zx9.png"
            className={styles.image}
          ></img>
        </div>
        <div className={styles.box1}>
          <p>
            ZX9 <br></br>
            SPEAKER
          </p>
          <p>
            Upgrade to premium speakers that are <br></br>phenomenally built to
            deliver truly remarkable<br></br> sound.
          </p>
          <button onClick={goToZX9}>SEE PRODUCTS</button>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={`${styles.box2} ${styles.speaker}`}>
          <p style={{ marginLeft: "50px" }}>ZX7 SPEAKER</p>
          <button onClick={goToZX7} className={styles.button1}>
            SEE PRODUCTS
          </button>
        </div>
        <div className={`${styles.box2} ${styles.imgspeaker}`}>
          <img
            src="/assets/home/desktop/image-speaker-zx7.png"
            alt="ZX7 Speaker"
          />
        </div>
      </div>
      <div className={styles.container3}>
        <div className={`${styles.box3} ${styles.blackimg}`}>
          <img src="/assets/home/desktop/image-earphones-yx1.jpg"></img>
        </div>
        <div className={`${styles.box3} ${styles.second}`}>
          <p>YX1 EARPHONES</p>
          <button onClick={goToYX1} className={styles.button1}>
            SEE PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}
