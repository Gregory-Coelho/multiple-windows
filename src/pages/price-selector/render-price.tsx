import { Background } from "./components/Background";
import { TitleAndCard } from "./components/TitleAndCard";
import styles from "./styles/Global.module.css";

function RenderPrice() {
  return (
    <div className={styles.root}>
      <Background>
        <TitleAndCard />
      </Background>
    </div>
  );
}

export default RenderPrice;
