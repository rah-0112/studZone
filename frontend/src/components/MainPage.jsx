import React from "react";
import Footer from "./Footer";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Updates from "../sections/Updates";
import { motion } from "framer-motion";

const MainPage = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Home />
            <Updates />
            <Contact />
            <Footer />
        </motion.div>
    );
};

export default MainPage;
