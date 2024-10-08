import styles from "./summary.module.css";
import { useGlobalContext } from "../context/GlobalContext";
export default function Summary({ handleSummaryClick }) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.number, 0);
  };
  const { cart, setCheck, check } = useGlobalContext();
  const SHIPPING_COST = 50;
  const VAT_RATE = 0.2;
  const total = calculateTotal();
  const vat = total * VAT_RATE;
  const grandTotal = total + vat + ship();
  function ship() {
    return cart.length === 0 ? 0 : SHIPPING_COST;
  }
  function change() {
    handleSummaryClick();
    if (handleSummaryClick()) {
      return setCheck?.((prev) => !prev);
    }
  }
  console.log(check);
  return (
    <div className={styles.main}>
      <p>summary</p>
      {cart.map((elem, index) => (
        <div key={index} className={styles.divmain}>
          <div className={styles.list}>
            <img src={elem.url}></img>
            <div className={styles.div}>
              <p>{elem.name}</p>
              <p>${formatNumber(elem.price)}</p>
            </div>
          </div>
          <p className={styles.p}>x{elem.number}</p>
        </div>
      ))}
      <div className={styles.sum}>
        <div className={styles.container}>
          <p>TOTAL</p>
          <p> ${formatNumber(calculateTotal())}</p>
        </div>
        <div className={styles.container}>
          <p>SHIPPING</p>
          <p> ${ship()}</p>
        </div>
        <div className={styles.container}>
          <p>VAT (INCLUDED)</p>
          <p> ${(calculateTotal() * VAT_RATE).toFixed(2)}</p>
        </div>
        <div className={styles.container}>
          <p>GRAND TOTAL</p>
          <p className={styles.total}>${grandTotal}</p>
        </div>
      </div>
      <button className={styles.button} onClick={change}>
        CONTINUE & PAY
      </button>
    </div>
  );
}
