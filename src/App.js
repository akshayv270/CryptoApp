import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import Coins from "./componets/Coins";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Exchanges from "./componets/Exchanges"
import CoinDetails from "./componets/CoinDetails"
import Footer from "./componets/Footer"
import NotFound from "./componets/NotFound";

function App() {
  return (
   <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
           <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />

        

        
      </Routes>
      <Footer />
   </Router>
  );
}

export default App;
