import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import PageNegoiu from "./pages/PageNegoiu";
import PageMoldoveanu from "./pages/PageMoldoveanu";
import PageOmu from "./pages/PageOmu";
import PageLespezi from "./pages/PageLespezi";
import PageApuseni from "./pages/PageApuseni";
import PageBuilaVanturarita from "./pages/PageBuilaVanturarita";
import LaculCaltun from "./pages/LaculCaltun";
import LaculCapra from "./pages/LaculCapra";
import LaculGalcescu from "./pages/LaculGalcescu";
import MuntiiParang from "./pages/MuntiiParang";
import VanatoareaLuiButeanu from "./pages/VanatoareaLuiButeanu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/PageNegoiu" element={<PageNegoiu />} />
      <Route path="/Pagemoldoveanu" element={<PageMoldoveanu />} />
      <Route path="/PageOmu" element={<PageOmu />} />
      <Route path="/PageLespezi" element={<PageLespezi />} />
      <Route path="/PageBuilaVanturarita" element={<PageBuilaVanturarita />} />
      <Route path="PageApuseni" element={<PageApuseni />}/>
      <Route path="LaculCaltun" element={<LaculCaltun/>} />
      <Route path="LaculCapra" element={<LaculCapra />} />
      <Route path="LaculGalcescu" element={<LaculGalcescu />} />
      <Route path="MuntiiParang" element={<MuntiiParang />} />
      <Route path="VanatoareaLuiButeanu" element={<VanatoareaLuiButeanu />} />
    </Routes>

  );
}

export default App;
