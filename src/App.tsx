import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useAppSelector } from "@/store";
import { Navbar } from "@/components";
import { About, Contact, Home, Projects } from "@/pages";

const App = () => {
  const { theme } = useAppSelector((state) => state.folioDetail);
  return (
    <main className={`bg-slate-300/20 ${theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
