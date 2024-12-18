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
        <Experience experiences={parseJsonFile('public/experiences.json')} resume="" />
        <Contact />
      </main>
    </>
  );
}
