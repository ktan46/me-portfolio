import Intro from "@/components/Intro";
import Projects from "@/components/Project";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  )
}
