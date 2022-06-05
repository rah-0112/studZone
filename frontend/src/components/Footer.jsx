import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-2 my-5">
            Made with{" "}
            <motion.span
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                    duration: 2,
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                ❤️
            </motion.span>
        </div>
    );
};

export default Footer;
