import styles from "./headphones.module.css";
import { useNavigate } from "react-router-dom";
export default function HeadphonesOne() {
  const navigate = useNavigate();

  const goToXX99MarkII = () => {
    navigate("/Headphones/XX99MarkII");
  };
  return (
    <div className={styles.box1}>
      <div className={styles.div1}>
        <img src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"></img>
      </div>
      <div className={styles.div2}>
        <p>NEW PRODUCT</p>
        <p>XX99 Mark II Headphones</p>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button onClick={goToXX99MarkII} className={styles.button3}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
