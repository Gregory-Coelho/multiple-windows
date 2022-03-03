import styles from "../styles/Calculator.module.css";
import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";
import { TotalTip } from "./TotalTip";
import { useState } from "react";
import { TipSelector } from "./TipSelector";

export const Calculator = () => {
  const [bill, setBill] = useState<number>(0);
  const [percent, setPercent] = useState<number | "custom">(0);
  const [nbPerson, setNbPerson] = useState<number>(0);
  const [custom, setCustom] = useState<number>(0);

  const finalPercent = percent === "custom" ? custom : percent;
  const totalTip = (finalPercent * (bill / nbPerson)) / 100;

  const total = totalTip + bill / nbPerson;

  const [billError, setBillError] = useState(Boolean);
  const [peopleError, setPeopleError] = useState(Boolean);
  const errorMessage = <p className={styles.errorMessage}>Can't be zero</p>;

  return (
    //BILL
    <div className={styles.calculator}>
      <div className={styles.calcule}>
        <div>
          <p>Bill {billError && errorMessage}</p>
          <img src={dollar} className={styles.dollar} alt="dollar sign" />
          <input
            placeholder="0"
            lang="en"
            value={bill || ""}
            type="number"
            step={".01"}
            onChange={(e) => {
              const newValue = e.target.value;
              setBill(parseFloat(newValue.replace(",", ".")));
              if (newValue) {
                setBillError(false);
              }
            }}
            className={`${styles.input} ${
              billError ? styles.inputError : styles.input
            }`}
            onBlur={(e) => {
              const newValue = e.target.value;
              if (newValue === "0") {
                setBillError(true);
              }
            }}
            //PERCENT
          ></input>
        </div>
        <div>
          <p>Select Tip %</p>
          <div className={styles.cardselector}>
            <TipSelector
              value={5}
              onClick={setPercent}
              selected={percent === 5}
            />
            <TipSelector
              value={10}
              onClick={setPercent}
              selected={percent === 10}
            />
            <TipSelector
              value={15}
              onClick={setPercent}
              selected={percent === 15}
            />
            <TipSelector
              value={25}
              onClick={setPercent}
              selected={percent === 25}
            />
            <TipSelector
              value={50}
              onClick={setPercent}
              selected={percent === 50}
            />
            <input
              onClick={(e) => {
                setPercent("custom");
              }}
              onChange={(e) => {
                const newValue = e.target.value;
                setCustom(parseFloat(newValue.replace(",", ".")));
              }}
              className={`${styles.inputCustom} ${
                percent === "custom"
                  ? styles.inputCustomFocus
                  : styles.inputCustom
              }`}
              placeholder="CUSTOM"
              step={".01"}
              type={"number"}
            ></input>
          </div>
        </div>

        <div>
          <p>Number of People {peopleError && errorMessage}</p>
          <img src={person} className={styles.person} alt="person" />

          <input
            // NUMBER OF PEOPLE

            placeholder="0"
            className={`${styles.input} ${
              peopleError ? styles.inputError : styles.input
            }`}
            type="number"
            value={nbPerson || ""}
            onChange={(e) => {
              const newValue = e.target.value;
              setNbPerson(parseFloat(newValue.replace(",", ".")));
              if (newValue) {
                setPeopleError(false);
              }
            }}
            onBlur={(e) => {
              const newValue = e.target.value;
              if (newValue === "0") {
                setPeopleError(true);
              }
            }}
          ></input>
        </div>
      </div>
      <div className={styles.total}>
        <TotalTip
          totalTip={isFinite(totalTip) ? totalTip : 0.0}
          total={isFinite(total) ? total : 0.0}
        />
        <button
          className={styles.reset}
          onClick={() => {
            setBill(0);
            setCustom(0);
            setNbPerson(0);
            setPercent(0);
          }}
        >
          <h3>RESET</h3>
        </button>
      </div>
    </div>
  );
};
