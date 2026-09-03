import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import Why from "@/components/site/Why";
import ReviewsZone from "@/components/site/ReviewsZone";
import QuoteSection from "@/components/site/QuoteSection";
import Footer from "@/components/site/Footer";
import MobileDock from "@/components/site/MobileDock";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Why />
        <ReviewsZone />
        <QuoteSection />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
