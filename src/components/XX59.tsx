import { Link } from "react-router-dom";
import styles from "./headphones.module.css";
export default function HeadphonesThree() {
  return (
    <div className={styles.box3}>
      <div className={styles.div5}>
        <img src="/assets/product-xx59-headphones/desktop/image-product.jpg"></img>
      </div>
      <div className={styles.div6}>
        <p>XX59 Headphones</p>
        <p>
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <Link to="./XX59" className={styles.buttonFirst}>
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
