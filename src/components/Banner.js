import styles from "../styles/Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerOrderCard}>
        <h2 className={styles.bannerTitle}>{props.title}</h2>
        <small className={styles.bannerText}>{props.text}</small>
        <br></br>

        <div className={styles.bannerOrderCardBody}>
          <button className={styles.bannerButton}>
            <img
              className={styles.bannerButtonIcon}
              src="/moto-icon.png"
              alt="moto icon"
            />
            {props.button}
          </button>
          <button className={styles.bannerButton2}>
            <img
              className={styles.bannerButtonIcon}
              src="/cart-icon.png"
              alt="cart icon"
            />
            {props.button2}
          </button>

          <br></br>
          <div className={styles.bannerButtonContainer}>
            <button className={styles.bannerButtonInput}>
              <img
                className={styles.bannerButtonInputIcon}
                src="/map-icon.png"
                alt="map icon"
              />
              <input
                className={styles.bannerButtonInputText}
                type="search"
                placeholder="Enter your address"
              />
            </button>
            <button className={styles.bannerButtonSearch}>
              <img
                className={styles.bannerButtonIcon}
                src="/search-icon.png"
                alt="search icon"
              />
              Find food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
