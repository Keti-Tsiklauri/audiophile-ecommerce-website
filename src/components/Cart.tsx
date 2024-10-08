import styles from "./cart.module.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function Cart() {
  const { cart, setCart, setToggle } = useGlobalContext();
  const navigate = useNavigate();

  // Format numbers with thousands separators
  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-US").format(num);

  // Calculate the total price of the cart
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.number, 0);

  // Handle removing all items from the cart
  const handleRemoveAll = () => setCart?.([]);

  // Increase item quantity
  const increase = (index: number) => {
    setCart?.((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, number: item.number + 1 } : item
      )
    );
  };

  // Remove specific item from the cart
  const deleteElement = (index: number) => {
    setCart?.((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Decrease item quantity
  const decrease = (index: number) => {
    setCart?.((prevCart) =>
      prevCart.map((item, i) =>
        i === index && item.number > 1
          ? { ...item, number: item.number - 1 }
          : item
      )
    );
  };

  // Navigate to checkout page
  const goToCheckOut = () => navigate("/CheckOut");

  // Check if the cart has any items
  const hasItems = calculateTotal() !== 0;

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <div className={styles.close}>
          {" "}
          <p>Cart is empty</p>{" "}
          <p onClick={() => setToggle?.((prev) => !prev)}>X</p>
        </div>
      ) : (
        <>
          <div className={styles.box1}>
            <p>Cart({cart.length})</p>
            <p onClick={handleRemoveAll}>Remove all</p>
          </div>
          {cart.map((elem, index) => (
            <div key={index} className={styles.box2}>
              <img src={elem.url} className={styles.image} alt={elem.name} />
              <div className={styles.box3}>
                <p>{elem.name}</p>
                <p>${formatNumber(elem.price)}</p>
              </div>
              <div className={styles.box6}>
                <p
                  className={styles.delete}
                  onClick={() => deleteElement(index)}
                >
                  &#10006;
                </p>
                <div className={styles.box4}>
                  <p className={styles.minus} onClick={() => decrease(index)}>
                    -
                  </p>
                  <p className={styles.number}>{elem.number}</p>
                  <p className={styles.plus} onClick={() => increase(index)}>
                    +
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.box5}>
            <p>TOTAL</p>
            <p>${formatNumber(calculateTotal())}</p>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              if (hasItems) {
                setToggle?.(true); // Call Toggle first
                goToCheckOut(); // Navigate to checkout
              }
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
