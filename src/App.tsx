import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import RenderTip from "./pages/tip-component/render-tip";
import RenderPrice from "./pages/price-selector/render-price";

function App() {
  const home = () => {
    return <h2>Home</h2>;
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tip-calculator">Tip Calculator</Link>
            </li>
            <li>
              <Link to="/interactive-pricing">Price Selector</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={home()} />
          <Route path="/tip-calculator" element={<RenderTip />} />
          <Route path="/interactive-pricing" element={<RenderPrice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
