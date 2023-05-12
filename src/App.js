import { Routes, Route, BrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Produit from "./pages/Produit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Acceuil />} />
        <Route path="/produit" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

