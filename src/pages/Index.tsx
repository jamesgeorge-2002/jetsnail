import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
