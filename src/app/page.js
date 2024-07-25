import AppBanner from "@/components/AppBanner/AppBanner";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhereToBuy from "@/components/WhereToBuy/WhereToBuy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
}
