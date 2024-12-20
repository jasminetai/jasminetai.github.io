import Navbar from '@/app/components/navbar';
import Intro from '@/app/components/intro';
import About from '@/app/components/about';
import Experience from '@/app/components/experience';
import Contact from '@/app/components/contact';
import { parseJsonFile } from 'next/dist/build/load-jsconfig';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <Intro />
        <About />
        <Experience expJson={parseJsonFile('public/experience.json')} />
        <Contact />
      </main>
    </>
  );
}
