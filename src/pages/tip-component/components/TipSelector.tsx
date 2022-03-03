import styles from "../styles/TipSelector.module.css";

export const TipSelector = ({
  value,
  onClick,
  selected,
}: {
  value: number | "custom";
  onClick: React.Dispatch<React.SetStateAction<number | "custom">>;
  selected: boolean;
}) => {
  return (
    <button
      className={!selected ? styles.selector : styles.focus}
      onClick={() => onClick(value)}
    >
      {value}%
    </button>
  );
};
