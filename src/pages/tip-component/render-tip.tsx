import { Background } from "./components/Background";
import { Calculator } from "./components/Calculator";
import "./styles/Global.css";

const RenderTip = () => {
  return (
    <Background>
      <h1>
        S P L I <br />T T E R
      </h1>
      <Calculator />
    </Background>
  );
};

export default RenderTip;
