import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import CoursesPreview from "@/components/home/CoursesPreview";
import CTA from "@/components/home/CTA";
import TechStack from "@/components/home/TechStack";


export default function Home() {
  return <><Hero /><TechStack /><ServicesPreview /><WhyUs /><Process /><CoursesPreview /><CTA /></>;
}