import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import RenderTip from "./pages/tip-component/render-tip";
import RenderPrice from "./pages/price-selector/render-price";

import styles from "./styles/homePage.module.css";
import "./styles/Global.css";

function App() {
  const home = () => {
    return <h2>Home</h2>;
  };

  return (
    <div className={styles.pageComponent}>
      <BrowserRouter>
        <div className={styles.navBar}>
          <Link to="/">Home</Link>
          <Link to="/tip-calculator">Tip Calculator</Link>
          <Link to="/interactive-pricing">Price Selector</Link>
        </div>

        <Routes>
          <Route path="/" element={home()} />
          <Route path="/tip-calculator" element={<RenderTip />} />
          <Route path="/interactive-pricing" element={<RenderPrice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
