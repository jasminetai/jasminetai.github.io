import Image from 'next/image';
import Header from './header';

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center bg-[#333] pb-16" id="about">

      <div className="flex flex-row mx-6 sm:mx-16">

        <div>

          {/* Header */}
          <Header text="whoami" />

          {/* Content */}
          <div className="flex flex-col">
            <p className="py-2">
              Back when I started my degree at the University of California, Santa Cruz in 2021, I had a vague idea of what I wanted to do.
            </p>
            <p className="py-2">
              Fast-forward to now: I study computer systems and more in Georgia Tech&apos;s online master&apos;s program in computer science. I&apos;ve gained my footing in computer science topics, supplemented by my second major in applied mathematics. I&apos;ve managed to obtain practical experience via research and internships.
            </p>
            <p className="py-2">
              I look forward to learning still more!
            </p>
          </div>

        </div>
      
        {/* Image */}
        <Image src="/self.jpg" alt="Jasmine Tai" width={400} height={400} className="hidden sm:block relative w-1/2 ml-6" />

      </div>
        
    </div>
  );
}