import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
