import React, { Fragment } from "react";

// import Breadcrumbs from "../../components/Breadcrumbs";
import AboutArea2 from "../components/AboutArea2";
import Breadcrumbs from "../components/BreadCrumbs";
import MySkill from "../components/MySkill";
import ServiceSection from "../components/ServiceSection";

const About = () => {
  return (
    <>
      <Breadcrumbs pageTitle={"About Us"} pageSub={"About"} />
      <AboutArea2 />
      <MySkill />
      <ServiceSection serviceclass={"wpo-service-area-4 section-padding"} />
    </>
  );
};
export default About;
