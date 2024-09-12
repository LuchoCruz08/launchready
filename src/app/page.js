import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import Steps from "@/components/steps";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Steps/>
      <Pricing/>
      <UseCases/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
