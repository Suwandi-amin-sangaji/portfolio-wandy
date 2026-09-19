"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { boxVariant } from "@/utils/landingAnimation.config";

export default function CardCareer() {
  const [duration, setDuration] = useState("~ 2+ Tahun");

  useEffect(() => {
    const startDate = new Date(2023, 9, 1); // 1 Oktober 2023
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0 && months > 0) {
      setDuration(`~ ${years} Tahun ${months} Bulan`);
    } else if (years > 0) {
      setDuration(`~ ${years} Tahun`);
    } else {
      setDuration(`~ ${months} Bulan`);
    }
  }, []);

  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="card bg-slate-100 dark:bg-slate-900 w-fit p-4 rounded flex justify-between items-center gap-2 sm:gap-3"
    >
      <Image
        src={"/img/Logo-SISI.png"}
        alt="PT. SINERGI INFORMATIKA SEMEN INDONESIA"
        width={1000}
        height={100}
        className="w-24 sm:w-32"
      />
      <section className="flex flex-col gap-1.5">
        <h2 className="text-base text-slate-600 dark:text-slate-300">
          Backend Developer
        </h2>
        <section className="flex items-center gap-6">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            PT. SINERGI INFORMATIKA SEMEN INDONESIA
          </p>
          {/* <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc">
            <li>Jakarta</li>
          </ul> */}
        </section>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Oktober 2023 - Current
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {duration}
        </p>
      </section>
    </motion.section>
  );
}
