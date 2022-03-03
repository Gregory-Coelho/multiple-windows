import { Card } from "./Card";
import { Title } from "./Title";
import styles from "../styles/TitleAndCard.module.css";

export const TitleAndCard = () => {
  return (
    <div className={styles.titleAndCard}>
      <Title />
      <Card />
    </div>
  );
};
