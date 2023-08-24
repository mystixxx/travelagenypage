import React from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Hero from "../components/Hero/Hero";
import Things from "../components/Things/Things";
import Deals from "../components/Deals/Deals";
import Vacations from "../components/Vacations/Vacations";
import SliderMenu from "../components/SliderMenu/SliderMenu";
import Footer from "../components/Footer/Footer";

function App() {
    return(
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Things />
            <Deals />
            <Vacations />
            <SliderMenu />
            <Footer />
        </BrowserRouter>
    );
}

export default App;