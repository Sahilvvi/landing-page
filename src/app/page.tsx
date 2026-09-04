import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ClappyBirds } from "@/components/ClappyBirds";
import { Business } from "@/components/Business";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <HowItWorks />
        <Features />
        <ClappyBirds />
        <Business />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
