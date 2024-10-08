import Footer from "./Footer";
import { useEffect } from "react";
import Imagebar from "./Imagebar";
import { useNavigate } from "react-router-dom";
import styles from "./XX99MarkIMore.module.css";
import { useGlobalContext } from "../context/GlobalContext";

import Navbar from "./Navbar";
export default function HeadphonesOneMore() {
  const { XX99MarkI, setXX99MarkI, cart, setCart, toggle, setToggle } =
    useGlobalContext();
  useEffect(() => {
    setXX99MarkI?.(1);
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
  const goToXX59 = () => {
    navigate("/Headphones/XX59");
  };
  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "XX99 Mark I");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "XX99 Mark I"
            ? { ...item, number: item.number + XX99MarkI }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "XX99 Mark I",
            price: 1750,
            url: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
            number: XX99MarkI,
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
            <img src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>XX99 Mark I Headphones</p>
              <p>
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <p>$ 1,750</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() =>
                    XX99MarkI > 1 && setXX99MarkI?.((prev) => prev - 1)
                  }
                  className={styles.minus}
                >
                  -
                </p>
                <p>{XX99MarkI}</p>
                <p
                  onClick={() => setXX99MarkI?.((prev) => prev + 1)}
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
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p className={styles.p}>
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is included with a
              balanced gold connector.
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
              src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
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
