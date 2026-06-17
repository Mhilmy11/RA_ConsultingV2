import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

import { useRef } from "react";

function App() {
  const expertRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" font-sans">
      <Navbar
        onClickToExpertRef={() => scrollToSection(expertRef)}
        onClickToServiceRef={() => scrollToSection(servicesRef)}
        onClickToClientRef={() => scrollToSection(clientsRef)}
      />

      <LandingPage
        expertRef={expertRef}
        servicesRef={servicesRef}
        clientsRef={clientsRef}
      />

      <Footer />
    </div>
  );
}

export default App;
