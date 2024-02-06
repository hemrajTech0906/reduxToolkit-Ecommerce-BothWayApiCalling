import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Input from "./pages/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path ="/input" element={<Input/>} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
