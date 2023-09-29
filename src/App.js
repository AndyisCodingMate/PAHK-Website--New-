import React from "react";
import "./components/styles.css"
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navibar from "./components/Navibar";
import Home from "./components/Home/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import ProductsAndServices from "./components/ProductsAndServices/ProductsAndServices"
import ContactUs from "./components/ContactUs/ContactUs"
import MediaRoom from "./components/MediaRoom/MediaRoom"
import Appendix from "./components/Appendix/Appendix"

function App() {
  let Component;
  switch (window.location.pathname) {
    
    case "/aboutus":
      Component = AboutUs;
      break;
    case "/pands":
      Component = ProductsAndServices;
      break;
    case "/contactus":
      Component = ContactUs;
      break;
    case "/mediaroom":
      Component = MediaRoom;
      break;
    case "/appendix":
      Component = Appendix;
      break;
    default:
      Component = Home;
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navibar/>
        <Component/>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
