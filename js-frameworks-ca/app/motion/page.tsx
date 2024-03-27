"use client";
import { motion } from "framer-motion";

export default function Motion() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <motion.button
        className={"p-3 rounded-lg"}
        whileHover={{ background: "#000", color: "#fff" }}
        transition={{ duration: 0.12 }}
        animate={{ background: "#fff" }}>
        test
      </motion.button>
    </div>
  );
}
