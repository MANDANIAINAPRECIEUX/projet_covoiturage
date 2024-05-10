import React from "react";
import { motion } from "framer-motion";

const Sary = () => {
  return (
    <>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        style={{
          width: "100%",
          zIndex: "1",
        }}
      >
        <motion.div
          className="owl-stage relative"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: 0 }}
          style={{
            width: "100%",
            zIndex: "1",
            msTouchAction: "pan-Y",
            MozBackfaceVisibility: "hidden",
          }}
        >
          <div className="owl-item">
            <img
              src="../public/images/cov1.jpg"
              alt="lolo1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          width: "100%",
          zIndex: "1",
        }}
      >
        <motion.div
          className="owl-stage relative"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: "100%",
            zIndex: "1",
            msTouchAction: "pan-Y",
            MozBackfaceVisibility: "hidden",
          }}
        >
          <div className="owl-item">
            <img
              src="../public/images/cov2.jpg"
              alt="lolo2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sary;
