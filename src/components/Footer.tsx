import styles from "./footer.module.css";
import { useGlobalContext } from "../context/GlobalContext";

export default function Footer() {
  const { navigationArray, footerImages } = useGlobalContext();
  return (
    <div>
      <div className={styles.container4}>
        <div className={`${styles.box4} ${styles.text}`}>
          <p className={styles.paragraph1}>
            Bringing you the{" "}
            <span style={{ color: "rgb(216,125,74)" }}>best</span> audio gear
          </p>
          <p className={styles.paragraph2}>
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className={`${styles.box4} `}>
          <img src="/assets/shared/desktop/image-best-gear.jpg"></img>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navigationDiv}>
          <div>
            <p className={styles.brand}>audiophile</p>
          </div>
          <div className={styles.navigation}>
            {navigationArray.map((elem, index) => (
              <p key={index} className={styles.navItem}>
                {elem}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.box}>
            <p className={styles.description}>
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={(styles.box, styles.images)}>
            {footerImages.map((elem, index) => (
              <img key={index} src={elem}></img>
            ))}
          </div>
        </div>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}
