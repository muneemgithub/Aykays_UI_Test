import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import FeaturesSection from "./components/FeaturedSection";
import InstallApp from "./components/installapp";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutUs />
      <InstallApp />
      <Section />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
