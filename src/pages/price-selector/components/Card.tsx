import { useState } from "react";
import styles from "../styles/Card.module.css";
import check from "../assets/icon-check.svg";

export const Card = () => {
  const [value, setValue] = useState("50.00");
  const [promo, setPromo] = useState(false);
  const calcul = Number(value) - (25 * Number(value)) / 100;
  return (
    <div className={styles.entireCard}>
      <div className={styles.viewsPrice}>
        <h3>100K PAGEVIEWS </h3>
        <div className={styles.price}>
          <h4>${promo ? calcul : value}</h4>
          <h3>/ month</h3>
        </div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          style={{ backgroundSize: `${value}%` }}
          className={styles.slideBar}
          value={value}
          onChange={(e) => {
            setValue(e.target.value + ".00");
          }}
        />
      </div>
      <div className={styles.monthlyYearly}>
        <p>Monthly Billing</p>

        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={() => {
              setPromo(promo === true ? false : true);
            }}
          />
          <span className={styles.slider}></span>
        </label>
        <p>Yearly Billing</p>
        <p className={styles.discount}>25% discount</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.botCard}>
        <div>
          <p>
            {" "}
            <img alt="check sign" src={check} className={styles.check} />
            Unlimited websites
          </p>
          <p>
            <img alt="check sign" src={check} className={styles.check} />
            100% data ownership
          </p>
          <p>
            <img alt="check sign" src={check} className={styles.check} />
            Email reports
          </p>
        </div>
        <button className={styles.button}> Start my trial</button>
      </div>
    </div>
  );
};
