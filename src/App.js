import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Youtube from "./components/Youtube";
import Bitcoin from "./components/Bitcoin";
import Random from "./components/Random";
import Outreach from "./components/Outreach";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/random" element={<Random />} />
        <Route path="/outreach" element={<Outreach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
