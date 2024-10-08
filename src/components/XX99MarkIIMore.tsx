import Footer from "./Footer";
import { useEffect } from "react";
import Imagebar from "./Imagebar";
import { useNavigate } from "react-router-dom";
import styles from "./XX99MarkIIMore.module.css";
import { useGlobalContext } from "../context/GlobalContext";

import Navbar from "./Navbar";
export default function HeadphonesOneMore() {
  const { XX99MarkII, setXX99MarkII, cart, setCart, toggle, setToggle } =
    useGlobalContext();
  useEffect(() => {
    setXX99MarkII?.(1);
  }, []);
  function Toggle() {
    setToggle?.(true);
  }
  const navigate = useNavigate();

  const goToXX99MarkI = () => {
    navigate("/Headphones/XX99MarkI");
  };
  const goToXX59 = () => {
    navigate("/Headphones/XX59");
  };
  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  const navigateback = useNavigate();

  const handleGoBack = () => {
    navigateback(-1);
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.name === "XX99 Mark II"
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "XX99 Mark II"
            ? { ...item, number: item.number + XX99MarkII }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "XX99 Mark II",
            price: 2999,
            url: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
            number: XX99MarkII,
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
            <img src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>NEW PRODUCT</p>
              <p>XX99 Mark II Headphones</p>
              <p>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <p>$ 2,999</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() =>
                    XX99MarkII > 1 && setXX99MarkII?.((prev) => prev - 1)
                  }
                  className={styles.minus}
                >
                  -
                </p>
                <p>{XX99MarkII}</p>
                <p
                  onClick={() => setXX99MarkII?.((prev) => prev + 1)}
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
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p className={styles.p}>
              {" "}
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
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
            <div>
              <span className={styles.number}>1x </span>
              <span className={styles.second}>Travel Bag</span>
            </div>
          </div>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imagediv1}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
            ></img>
          </div>
        </div>
        <div>
          <p className={styles.headerElem}>you may also like</p>
          <div className={styles.box}>
            <div className={styles.imageDiv}>
              <img src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"></img>
              <p>XX99 MARK I</p>
              <button onClick={goToXX99MarkI}>See Product</button>
            </div>
            <div className={styles.imageDiv}>
              <img src="/assets/product-xx59-headphones/desktop/image-product.jpg"></img>
              <p>XX59</p>
              <button onClick={goToXX59}>See Product</button>
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
