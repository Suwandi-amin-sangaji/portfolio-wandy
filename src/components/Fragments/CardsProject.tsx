"use client";
import React from "react";
import CardProject, { TechStackImage } from "../Elements/Cards/CardProject";
import { motion } from "framer-motion";
import { boxVariant } from "@/utils/landingAnimation.config";

export default function CardsProject() {
  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid sm:grid-cols-2 gap-7 items-center"
    >
     <h1 className="text-3xl text-slate-600 dark:text-slate-200">Belum Ada Data</h1>
    </motion.section>
  );
}
