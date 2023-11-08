import App from "./MainPage/App";
import ItemPage from "./ItemPage/ItemPage";
import Cart from "./Cart/Cart";
import History from "./History/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function RoutesComponent() {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ECommerceSampleProject/" element={<App cart={cart} />} />
        <Route
          path="/ECommerceSampleProject/Items/:id"
          element={<ItemPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/ECommerceSampleProject/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              history={history}
              setHistory={setHistory}
            />
          }
        />
        <Route
          path="/ECommerceSampleProject/dashboard"
          element={<History history={history} setHistory={setHistory} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
