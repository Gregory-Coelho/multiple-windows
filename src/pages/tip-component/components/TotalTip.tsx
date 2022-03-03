import styles from "../styles/Total.module.css";

export const TotalTip = ({
  totalTip,
  total,
}: {
  totalTip: number;
  total: number;
}) => {
  return (
    <>
      <div className={styles.part}>
        <div className={styles.textArea}>
          <h2>Tip Amount </h2>
          <h4>/ person</h4>
        </div>
        <div className={styles.total}>
          ${!totalTip ? "0.00" : totalTip.toFixed(2)}
        </div>
      </div>
      <div className={styles.part}>
        <div className={styles.textArea}>
          <h2>Total </h2>
          <h4>/ person</h4>
        </div>
        <div className={styles.total}>
          {" "}
          ${!total ? "0.00" : total.toFixed(2)}
        </div>
      </div>
    </>
  );
};
