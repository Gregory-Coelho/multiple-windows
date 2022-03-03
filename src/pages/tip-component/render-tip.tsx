import { Background } from "./components/Background";
import { Calculator } from "./components/Calculator";
import styles from "./styles/Global.module.css";

const RenderTip = () => {
  return (
    <div className={styles.root}>
      <Background>
        <h1>
          S P L I <br />T T E R
        </h1>
        <Calculator />
      </Background>
    </div>
  );
};

export default RenderTip;
