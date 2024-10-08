import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Imagebar from "./Imagebar";
import { useNavigate } from "react-router-dom";
import styles from "./XX99MarkIIMore.module.css";
import { useGlobalContext } from "../context/GlobalContext";

export default function HeadphonesOneMore() {
  const { toggle, setToggle } = useGlobalContext();
  useEffect(() => {
    setZX9?.(1);
  }, []);
  function Toggle() {
    setToggle?.(true);
  }
  const { ZX9, setZX9, cart, setCart } = useGlobalContext();
  const navigateback = useNavigate();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigateback(-1);
  };
  const goToZX7 = () => {
    navigate("/Speakers/ZX7");
  };
  const goToXX99MarkI = () => {
    navigate("/Headphones/XX99MarkI");
  };
  const goToXX59 = () => {
    navigate("/Headphones/XX59");
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "ZX9");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "ZX9" ? { ...item, number: item.number + ZX9 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "ZX9",
            price: 4500,
            url: "/assets/product-zx9-speaker/desktop/image-product.jpg",
            number: ZX9,
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
            <img src="/assets/product-zx9-speaker/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>NEW PRODUCT</p>
              <p>ZX9 SPEAKER</p>
              <p>
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <p>$ 4,500</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() => ZX9 > 1 && setZX9?.((prev) => prev - 1)}
                  className={styles.minus}
                >
                  -
                </p>
                <p>{ZX9}</p>
                <p
                  onClick={() => setZX9?.((prev) => prev + 1)}
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
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p className={styles.p}>
              Discover clear, more natural sounding highs than the competition
              with ZX9’s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You’ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
            </p>
          </div>
          <div className={styles.box2}>
            <p className={styles.header}>in the box</p>
            <div>
              <span className={styles.number}>2x</span>
              <span className={styles.second}> Speaker Unit</span>
            </div>
            <div>
              <span className={styles.number}>2x</span>
              <span className={styles.second}> Speaker Cloth Panel</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>{" "}
              <span className={styles.second}>User Manual</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>
              <span className={styles.second}> 3.5mm 10m Audio Cable</span>
            </div>
            <div>
              <span className={styles.number}>1x </span>
              <span className={styles.second}>10m Optical Cable</span>
            </div>
          </div>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imagediv1}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
            ></img>
          </div>
        </div>
        <div>
          <p className={styles.headerElem}>you may also like</p>
          <div className={styles.box}>
            <div className={styles.imageDiv}>
              <img src="/assets/product-zx7-speaker/desktop/image-product.jpg"></img>
              <p>ZX7 SPEAKER</p>
              <button onClick={goToZX7}>See Product</button>
            </div>
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
          </div>
        </div>
        <Imagebar />
        <Footer />
      </div>
    </div>
  );
}
