import styles from "./headphones.module.css";
import { useNavigate } from "react-router-dom";
export default function HeadphonesTwo() {
  const navigate = useNavigate();
  const goToXX99MarkI = () => {
    navigate("/Headphones/XX99MarkI");
  };
  return (
    <div className={styles.box2}>
      <div className={styles.div3}>
        <p>XX99 Mark I Headphones</p>
        <p>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button onClick={goToXX99MarkI} className={styles.button2}>
          SEE PRODUCT
        </button>
      </div>
      <div className={styles.div4}>
        <img src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"></img>
      </div>
    </div>
  );
}
