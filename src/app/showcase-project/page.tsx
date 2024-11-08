import CardsProject from "@/components/Fragments/CardsProject";
import HeaderMain from "@/components/Fragments/HeaderMain";
import Navbar from "@/components/Fragments/Navbar";
import Sidebar from "@/components/Fragments/Sidebar";
import { showcaseJsonld } from "@/seo/showcase-project";
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
          <HeaderMain
            title="Projects"
            desc="Showcase projects that I have worked on"
          />
          <CardsProject />
        </main>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(showcaseJsonld()),
        }}
      ></script>
    </>
  );
}

export const metadata: Metadata = {
  title: "Explore Suwandi Amin Sangaji's Projects",
  description:
    "Discover the diverse range of projects created by Suwandi Amin Sangaji. From web development to software solutions, explore the portfolio here.",
  alternates: {
    canonical: `${process.env.NEXT_SITE_URL}/showcase-project`,
  },
  openGraph: {
    countryName: "Indonesia",
    title: "Explore Suwandi Amin Sangaji's Projects",
    description:
      "Discover the diverse range of projects created by Suwandi Amin Sangaji. From web development to software solutions, explore the portfolio here.",
  },
};
