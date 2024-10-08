import { useNavigate } from "react-router-dom";
import styles from "./order.module.css";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
export default function Order() {
  const { cart, setCheck } = useGlobalContext();
  const [more, setMore] = useState<boolean>(false);
  function More() {
    setMore((prev) => !prev);
  }
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  function change() {
    setCheck?.(false);
  }
  const SHIPPING_COST = 50;
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.number, 0);
  };
  const VAT_RATE = 0.2;
  const { check } = useGlobalContext();
  const total = calculateTotal();
  const vat = total * VAT_RATE;
  const grandTotal = total + vat + ship();
  function ship() {
    return cart.length === 0 ? 0 : SHIPPING_COST;
  }
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className={`${styles.main} ${check ? "" : styles.hide}`}>
      <p onClick={change} className={styles.close}>
        close
      </p>
      <div className={styles.firstDiv}>
        <img
          src="/assets/checkout/icon-order-confirmation.svg"
          className={styles.image}
        ></img>

        <p className={styles.thank}>
          THANK YOU <br /> FOR YOUR ORDER
        </p>
        <p className={styles.you}>
          You will receive an email confirmation shortly.
        </p>
      </div>
      <div className={styles.maindiv}>
        <div className={styles.grey}>
          <div className={styles.divmain}>
            <div className={styles.list}>
              <img src={cart[0].url}></img>
              <div className={styles.div}>
                <p>{cart[0].name}</p>
                <p>${formatNumber(cart[0].price)}</p>
              </div>
            </div>
            <p className={styles.p}>x{cart[0].number}</p>
          </div>

          <hr className={styles.hr} />
          <div className={styles.items}>
            {more ? (
              <></>
            ) : (
              cart.length > 1 && (
                <p onClick={More}>and {cart.length - 1} other item(s)</p>
              )
            )}
          </div>
          {more &&
            cart.map((elem, index) =>
              index === 0 ? (
                <></>
              ) : (
                <div>
                  <div className={styles.divmain} key={index}>
                    <div className={styles.list}>
                      <img src={elem.url} alt={elem.name} />
                      <div className={styles.div}>
                        <p>{elem.name}</p>
                        <p>${formatNumber(elem.price)}</p>
                      </div>
                    </div>
                    <p className={styles.p}>x{elem.number}</p>
                  </div>
                  <hr className={styles.hr} />
                  <div className={styles.items}>
                    <p onClick={More}> see less</p>
                  </div>
                </div>
              )
            )}
        </div>
        <div className={styles.grand}>
          <p>GRAND TOTAL</p>
          <p>${grandTotal}</p>
        </div>
      </div>
      <div>
        <button onClick={goToHome} className={styles.button}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
