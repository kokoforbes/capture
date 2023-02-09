import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animat='show'
      exit='exit'
      style={{ background: "#fff" }}
    >
      <h1>ContactUs</h1>
    </motion.div>
  );
};

export default ContactUs;
