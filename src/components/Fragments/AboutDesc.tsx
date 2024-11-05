"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { boxVariant } from "@/utils/landingAnimation.config";

export default function AboutDesc() {
  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-slate-600 dark:text-slate-200 flex flex-col gap-6 mb-6"
    >
      <p>
        Halo! Nama saya Suwandi Amin Sangaji, dan saya adalah seorang Fullsatck Developer yang berbasis di Kota Sorong Papua Barat Daya 🇮🇩. Saya mengkhususkan diri dalam pengembangan web full-stack. Dengan pengalaman lebih dari 3 tahun di industri teknologi, saya telah mengasah keterampilan saya dalam pengembangan situs web menggunakan teknologi Php, React, python, Bootstrap css, tailwindcss dan JavaScript.
      </p>
      <p>
        Selama karier saya, saya menikmati bekerja di{" "}
        <Link
          className="underline"
          target="_blank"
          href={"https://solusi247.com"}
        >
          PT. Sinergi Informatika Semen Indonesia
        </Link>{" "}
        sebagai Backend Developer. Di sinilah saya pertama kali memasuki industri IT. Pekerjaan saya berfokus pada membangun aplikasi web yang dapat diskalakan dan menyediakan solusi teknologi yang inovatif.
      </p>
      <p>
        Tujuan karier saya adalah menjadi seorang pengusaha yang sukses. Saya bercita-cita untuk membangun startup teknologi saya sendiri, menciptakan solusi inovatif yang dapat memberikan dampak signifikan pada industri. Saya percaya pada kekuatan teknologi untuk mengubah hidup, dan saya berkomitmen untuk mengejar impian kewirausahaan saya dengan dedikasi dan ketekunan.
      </p>
      <p>
        Jangan ragu untuk menghubungi melalui halaman{" "}
        <Link className="underline" href="/contacts">
          Kontak
        </Link>{" "}
        dan mari kita diskusikan bagaimana kita bisa berkolaborasi dalam proyek-proyek menarik.
      </p>
    </motion.section>
  );
}
