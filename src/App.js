import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IframePage from "./IframePage";
import WalletIframePage from "./WalletIframePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WalletIframePage />} path="/" />
        <Route element={<IframePage />} path="/:quest" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
