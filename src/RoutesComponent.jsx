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
        <Route path="/" element={<App cart={cart} />} />
        <Route
          path="/Items/:id"
          element={<ItemPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
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
          path="/dashboard"
          element={<History history={history} setHistory={setHistory} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
