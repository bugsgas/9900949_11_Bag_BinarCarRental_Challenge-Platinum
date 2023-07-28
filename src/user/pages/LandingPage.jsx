import Hero from "../component/Hero";
import WhyUs from "../component/LandingPage/WhyUs";
import OurServices from "../component/LandingPage/OurServices";
import Banner from "../component/LandingPage/Banner";
import Faq from "../component/LandingPage/Faq";

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
