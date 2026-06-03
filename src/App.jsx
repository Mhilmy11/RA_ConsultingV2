import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className=" font-sans">
      <Navbar />

      <LandingPage />

      <Footer />
    </div>
  );
}

export default App;
