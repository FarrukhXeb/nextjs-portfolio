import Breadcrumbs from "../components/BreadCrumbs";
import ContactPageSec from "../components/ContactSection";

function contact() {
  return (
    <>
      <Breadcrumbs pageTitle={"Contact Me"} pageSub={"Contact"} />
      <ContactPageSec />
    </>
  );
}

export default contact;
