import React from "react";
import Footer from "./Footer";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Updates from "../sections/Updates";
import { motion } from "framer-motion";

const MainPage = () => {
    return (
        <motion.div exit={{ y: -1000 }}>
            <Home />
            <Updates />
            <Contact />
            <Footer />
        </motion.div>
    );
};

export default MainPage;
