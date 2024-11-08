import TechStack from "@/components/Elements/Sections/TechStack";
import AboutDesc from "@/components/Fragments/AboutDesc";
import HeaderMain from "@/components/Fragments/HeaderMain";
import Navbar from "@/components/Fragments/Navbar";
import Sidebar from "@/components/Fragments/Sidebar";
import { aboutMejsonld } from "@/seo/about-me";
import ParticlesBackground from "@/utils/ParticlesBackground";
import { Metadata } from "next";

export default function page() {
  return (
    <>
      <ParticlesBackground customParentClass="hidden dark:block" />
      <section className="relative md:px-5 lg:px-14 xl:max-w-[85%] mx-auto overflow-x-hidden">
        <Navbar />
        <Sidebar />
        <main className="w-full px-5 md:pl-20 lg:pl-72 lg:py-3 pb-20">
          <HeaderMain title="About Me" desc="A short story about me" />
          <AboutDesc />
          <TechStack />
        </main>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutMejsonld()),
        }}
      ></script>
    </>
  );
}

export const metadata: Metadata = {
  title: "Get to Know Suwandi Amin Sangaji",
  description:
    "Welcome to Suwandi Amin Sangaji's About Me page. Gain insights into his experiences, expertise, and vision for the future.",
  alternates: {
    canonical: `${process.env.NEXT_SITE_URL}/about-me`,
  },
  openGraph: {
    countryName: "Indonesia",
    title: "Get to Know Suwandi Amin Sangaji",
    description:
      "Welcome to Suwandi Amin Sangaji's About Me page. Gain insights into his experiences, expertise, and vision for the future.",
  },
};
