import React from "react";

import AboutArea from "../components/AboutArea";
import ContactArea from "../components/ContactArea";
import Hero from "../components/Hero";
import PorfolioSection from "../components/PortfolioSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSlider from "../components/TestimonialSlider";

// import { getPostsAndPortfolio } from "../lib/data";

// export const getServerSideProps = async () => {
//   const data = await getPostsAndPortfolio();
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default function Home() {
  return (
    <>
      <Hero />
      <AboutArea ab3class={"wpo-about-area-4"} />
      <ServiceSection serviceclass={"wpo-service-area-5 section-padding"} />
      <PorfolioSection />
      <TestimonialSlider testclass={"wpo-testimonial-area-5"} />
      <ContactArea contactclass={"wpo-contact-area5"} />
    </>
  );
}
