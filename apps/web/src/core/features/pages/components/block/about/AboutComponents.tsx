import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import AboutBrands from "../../ui/about/AboutBrands";
import AboutHero from "../../ui/about/AboutHero";
import AboutValues from "../../ui/about/AboutValues";

function AboutComponents() {
  return (
    <SectionLayout>
      <AboutHero />
      <AboutValues />
      <AboutBrands />
    </SectionLayout>
  );
}

export default AboutComponents;
