import Intro from "@/components/Intro";
import Project from "@/components/Project";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Project />
    </main>
  )
}
