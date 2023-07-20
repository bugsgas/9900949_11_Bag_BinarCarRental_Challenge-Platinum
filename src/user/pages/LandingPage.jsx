import Hero from "../component/Hero";
import OurServices from "../component/OurServices";
import WhyUs from "../component/WhyUs";
import Banner from "../component/Banner";
import Faq from "../component/Faq";

export default function LandingPage() {
  return (
    <>
      <Hero showButton={true} showText={true} showImg={true} />
      <OurServices />
      <WhyUs />
      <Banner />
      <Faq />
    </>
  );
}
