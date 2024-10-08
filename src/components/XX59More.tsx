import Navbar from "./Navbar";
import Footer from "./Footer";
import Imagebar from "./Imagebar";
import { useEffect } from "react";
import styles from "./XX59More.module.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
export default function HeadphonesOneMore() {
  const { XX59, setXX59, cart, setCart, toggle, setToggle } =
    useGlobalContext();
  useEffect(() => {
    setXX59?.(1);
  }, []);
  function Toggle() {
    setToggle?.(true);
  }
  const navigateback = useNavigate();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigateback(-1);
  };
  const goToXX99MarkII = () => {
    navigate("/Headphones/XX99MarkII");
  };
  const goToXX99MarkI = () => {
    navigate("/Headphones/XX99MarkI");
  };
  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "XX59");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "XX59" ? { ...item, number: item.number + XX59 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "XX59",
            price: 899,
            url: "/assets/product-xx59-headphones/desktop/image-product.jpg",
            number: XX59,
          },
        ];
      }
    });
  }
  return (
    <div>
      <Navbar />
      <div className={`${toggle ? "" : styles.opacity}`} onClick={Toggle}>
        <p className={styles.go} onClick={handleGoBack}>
          Go Back
        </p>
        <div className={styles.containerMore}>
          <div className={styles.imageDivMore}>
            <img src="/assets/product-xx59-headphones/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>XX59 Headphones</p>
              <p>
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <p>$ 899</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() => XX59 > 1 && setXX59?.((prev) => prev - 1)}
                  className={styles.minus}
                >
                  -
                </p>
                <p>{XX59}</p>
                <p
                  onClick={() => setXX59?.((prev) => prev + 1)}
                  className={styles.plus}
                >
                  +
                </p>
              </div>
              <div className={styles.but}>
                <button onClick={() => addOnCart()}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.box1}>
            <p className={styles.header}>FEATURES</p>
            <p className={styles.p}>
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p className={styles.p}>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </p>
          </div>
          <div className={styles.box2}>
            <p className={styles.header}>in the box</p>
            <div>
              <span className={styles.number}>1x</span>
              <span className={styles.second}> Headphone Unit</span>
            </div>
            <div>
              <span className={styles.number}>2x</span>
              <span className={styles.second}> Replacement Earcups</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>{" "}
              <span className={styles.second}>User Manual</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>
              <span className={styles.second}> 3.5mm 5m Audio Cable</span>
            </div>
          </div>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imagediv1}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
            ></img>
          </div>
        </div>
        <div>
          <p className={styles.headerElem}>you may also like</p>
          <div className={styles.box}>
            <div className={styles.imageDiv}>
              <img src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"></img>
              <p>XX99 MARK II</p>
              <button onClick={goToXX99MarkII}>See Product</button>
            </div>
            <div className={styles.imageDiv}>
              <img src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"></img>
              <p>XX99 Mark I</p>
              <button onClick={goToXX99MarkI}>See Product</button>
            </div>
            <div className={styles.imageDiv}>
              <img src="/assets/product-zx9-speaker/desktop/image-product.jpg"></img>
              <p>ZX9 SPEAKER</p>
              <button onClick={goToZX9}>See Product</button>
            </div>
          </div>
        </div>
        <Imagebar />
        <Footer />
      </div>
    </div>
  );
}
