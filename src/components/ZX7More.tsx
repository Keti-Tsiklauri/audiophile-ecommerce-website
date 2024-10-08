import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Imagebar from "./Imagebar";
import { useNavigate } from "react-router-dom";
import styles from "./XX99MarkIMore.module.css";
import { useGlobalContext } from "../context/GlobalContext";

export default function HeadphonesOneMore() {
  const { ZX7, setZX7, cart, setCart, toggle, setToggle } = useGlobalContext();
  useEffect(() => {
    setZX7?.(1);
  }, []);
  function Toggle() {
    setToggle?.(true);
  }
  const navigateback = useNavigate();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigateback(-1);
  };
  const goToZX9 = () => {
    navigate("/Speakers/ZX9");
  };
  const goToXX99MarkII = () => {
    navigate("/Headphones/XX99MarkII");
  };
  const goToXX59 = () => {
    navigate("/Headphones/XX59");
  };
  console.log(cart);
  function addOnCart() {
    setCart?.((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "ZX7");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "ZX7" ? { ...item, number: item.number + ZX7 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: "ZX7",
            price: 3500,
            url: "/assets/product-zx7-speaker/desktop/image-product.jpg",
            number: ZX7,
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
            <img src="/assets/product-zx7-speaker/desktop/image-product.jpg"></img>
          </div>
          <div>
            <div className={styles.More}>
              <p>ZX7 SPEAKER</p>
              <p>
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <p>$ 3,500</p>
            </div>
            <div className={styles.add}>
              <div className={styles.numberI}>
                <p
                  onClick={() => ZX7 > 1 && setZX7?.((prev) => prev - 1)}
                  className={styles.minus}
                >
                  -
                </p>
                <p>{ZX7}</p>
                <p
                  onClick={() => setZX7?.((prev) => prev + 1)}
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
              Reap the advantages of a flat diaphragm tweeter cone. This
              provides a fast response rate and excellent high frequencies that
              lower tiered bookshelf speakers cannot provide. The woofers are
              made from aluminum that produces a unique and clear sound. XLR
              inputs allow you to connect to a mixer for more advanced usage.
            </p>
            <p className={styles.p}>
              The ZX7 speaker is the perfect blend of stylish design and high
              performance. It houses an encased MDF wooden enclosure which
              minimises acoustic resonance. Dual connectivity allows pairing
              through bluetooth or traditional optical and RCA input. Switch
              input sources and control volume at your finger tips with the
              included wireless remote. This versatile speaker is equipped to
              deliver an authentic listening experience.
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
              <span className={styles.second}> 3.5mm 7.5m Audio Cable</span>
            </div>
            <div>
              <span className={styles.number}>1x</span>
              <span className={styles.second}> 7.5m Optical Cable</span>
            </div>
          </div>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imagediv1}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
            ></img>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
            ></img>
          </div>
          <div className={styles.imagediv2}>
            <img
              style={{ borderRadius: "4%" }}
              src="/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
            ></img>
          </div>
        </div>
        <div>
          <p className={styles.headerElem}>you may also like</p>
          <div className={styles.box}>
            <div className={styles.imageDiv}>
              <img src="/assets/product-zx9-speaker/desktop/image-product.jpg"></img>
              <p>ZX9 SPEAKER</p>
              <button onClick={goToZX9}>See Product</button>
            </div>
            <div className={styles.imageDiv}>
              <img src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"></img>
              <p>XX99 MARK II</p>
              <button onClick={goToXX99MarkII}>See Product</button>
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
