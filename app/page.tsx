import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Project";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Footer from "@/components/TempFooter";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
