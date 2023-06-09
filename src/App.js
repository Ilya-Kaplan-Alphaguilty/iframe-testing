import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IframePage from "./IframePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IframePage />} path="/:quest" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
