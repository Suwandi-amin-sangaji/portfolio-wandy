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
      className="grid sm:grid-cols-2 gap-7 items-start"
    >
      <CardProject
        title="MALLI.ID"
        desc="Solusi Point of Sale (POS) & ERP modern untuk bisnis di Indonesia. Kelola stok barang, multi-outlet kasir, laporan penjualan real-time, dan pembayaran digital dalam satu platform terintegrasi."
        imgProject="/img/malli-project.jpg"
        linkProject="https://malli.id"
      >
        <TechStackImage logoUrl="/icons/nextjs.svg" alt="Next.js" />
        <TechStackImage logoUrl="/icons/react.svg" alt="React" />
        <TechStackImage logoUrl="/icons/typescript.svg" alt="TypeScript" />
        <TechStackImage logoUrl="/icons/tailwindcss.svg" alt="Tailwind CSS" />
        <TechStackImage logoUrl="/icons/nodejs.svg" alt="Node.js" />
      </CardProject>
    </motion.section>
  );
}
