import { Hero } from "@/components/hero";
import { Collectif } from "@/components/collectif";
import { Projects } from "@/components/projects";
import { Collaborate } from "@/components/collaborate";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <Collectif />
        <Projects />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}