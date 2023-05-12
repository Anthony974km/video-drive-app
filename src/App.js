import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produit from "./pages/Produit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Accueil />} />
        <Route path="/produit" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

