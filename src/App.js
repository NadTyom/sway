import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <div>
        <button className="registerBtn">Order</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
