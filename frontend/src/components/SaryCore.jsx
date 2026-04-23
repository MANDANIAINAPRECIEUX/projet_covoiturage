import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SaryCore = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 10000); // Change l'image toutes les 3 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentImage === 1 && (
          <motion.div
            key="image1"
            initial={{
              opacity: 0,
              filter: "blur(20px) brightness(0.4) saturate(50%)",
            }}
            animate={{
              opacity: 0.5,
              filter: "blur(0px) brightness(0.6) saturate(75%)",
            }}
            exit={{
              opacity: 1,
              filter: "blur(0px) brightness(1.0) saturate(100%)",
            }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            style={{
              width: "100%",
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="../public/images/cov2.jpg"
              alt="lolo1"
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        )}
        {currentImage === 2 && (
          <motion.div
            key="image2"
            initial={{
              opacity: 0,
              filter: "blur(20px) brightness(0.4) saturate(50%)",
            }}
            animate={{
              opacity: 0.5,
              filter: "blur(0px) brightness(0.6) saturate(75%)",
            }}
            exit={{
              opacity: 1,
              filter: "blur(0px) brightness(1.0) saturate(100%)",
            }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
            style={{
              width: "100%",
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="../public/images/cov5.jpg"
              alt="lolo2"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default SaryCore;
