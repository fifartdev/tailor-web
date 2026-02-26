import HeroSection from "@/components/sections/HeroSection";
import ThreadDivider from "@/components/sections/ThreadDivider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ThreadDivider className="bg-[#0d4d51]" />
      <AboutSection />
      <ThreadDivider className="bg-[#0d4d51]" />
      <ServicesSection />
      <ThreadDivider className="bg-[#0d4d51]" />
      <ProcessSection />
      <ThreadDivider className="bg-[#0d4d51]" />
      <ContactSection />
    </>
  );
}
