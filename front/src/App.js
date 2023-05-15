import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produit from "./pages/Produit";
import Paiement from "./pages/Paiement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Accueil />} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/paiement/:id" element={<Paiement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

