import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Imagebar from "./Imagebar";
import { useNavigate } from "react-router-dom";
import styles from "./XX99MarkIIMore.module.css";
import { useGlobalContext } from "../context/GlobalContext";

export default function HeadphonesOneMore() {
  const { YX1, setYX1, cart, setCart, toggle, setToggle } = useGlobalContext();
  useEffect(() => {
    setYX1?.(1);
  }, []);
  function Toggle() {
    setToggle?.(true);
  }
  const navigateback = useNavigate();
  const navigate = useNavigate();
  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  const goToXX99MarkI = () => {
    navigate("/Headphones/XX99MarkI");
  };
  const goToXX59 = () => {
    navigate("/Headphones/XX59");
  };
  const handleGoBack = () => {
    navigateback(-1);
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "YX1");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "YX1" ? { ...item, number: item.number + YX1 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "YX1",
            price: 599,
            url: "/assets/product-yx1-earphones/desktop/image-product.jpg",
            number: YX1,
          },
        ];
      }
    });
  }
  return (
    <div>
      <Navbar />
      <div className={`${toggle ? "" : styles.opacity} `} onClick={Toggle}>
        <p className={styles.go} onClick={handleGoBack}>
          Go Back
        </p>
        <div className={styles.containerMore}>
          <div className={styles.imageDivMore}>
            <img src="/assets/product-yx1-earphones/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>NEW PRODUCT</p>
              <p>YX1 WIRELESS EARPHONES</p>
              <p>
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <p>$ 599</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() => YX1 > 1 && setYX1?.((prev) => prev - 1)}
                  className={styles.minus}
                >
                  -
                </p>
                <p>{YX1}</p>
                <p
                  onClick={() => setYX1?.((prev) => prev + 1)}
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
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p className={styles.p}>
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>
          <div className={styles.box2}>
            <p className={styles.header}>in the box</p>
            <div>
              <span className={styles.number}>2x</span>
              <span className={styles.second}> Earphone Unit</span>
            </div>
            <div>
              <span className={styles.number}>6x</span>
              <span className={styles.second}>Multi-size Earplugs</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>{" "}
              <span className={styles.second}>User Manual</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>
              <span className={styles.second}> USB-C Charging Cable</span>
            </div>
            <div>
              <span className={styles.number}>1x </span>
              <span className={styles.second}>Travel Pouch</span>
            </div>
          </div>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imagediv1}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
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
