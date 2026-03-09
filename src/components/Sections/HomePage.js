// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import IntroSection from "./IntroSection/IntroSection";
import AboutUs from './AboutUs/AboutUs';
import JungrooApproach from "./JungrooApproach/JungrooApproach";
import OurServices from "./OurServices/OurServices";
import Products from "./Products/Products";
import MediaMentions from "./MediaMentions/MediaMentions";
import AwardsRecognition from "./AwardsSection/AwardsSection";
import Testimonials from "./Testimonials/Testimonials";
import Founders from "./FoundersSection/FoundersSection";
import ContactUsSection from "./ContactUs/ContactUsSection";
import CaseStudiesIntro from "./CaseStudies/CaseStudies";
import Footer from './Footer/Footer';
export default function HomePage() {
 
  return (
    <>
      <IntroSection />
      <AboutUs/>
      <JungrooApproach />
      <section id="our-services" style={{ scrollMarginTop: 100 }}>
        <OurServices />
      </section>
      <section id="our-products" style={{ scrollMarginTop: 100 }}>
        <Products />
      </section>
      <section id="case-studies" style={{ scrollMarginTop: 100 }}>
        <CaseStudiesIntro />
      </section>
      <MediaMentions />
      <AwardsRecognition />
      <Testimonials />
      <Founders />
      <section id="contact-us" style={{ scrollMarginTop: 100 }}>
        <ContactUsSection />
      </section>
      <Footer/>
    </>
  );
}