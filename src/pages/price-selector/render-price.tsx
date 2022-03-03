import { Background } from "./components/Background";
import { TitleAndCard } from "./components/TitleAndCard";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <Background>
        <TitleAndCard />
      </Background>
    </div>
  );
}

export default App;
