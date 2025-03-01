import Image from 'next/image';
import Header from './header';

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center bg-zinc-700 pt-6 sm:pt-10 pb-4" id="about">

      <div className="flex flex-col justify-center mx-6 sm:mx-16">
        
        {/* Header */}
        <Header text="whoami" />

        <div className="flex flex-col sm:flex-row items-center">

          {/* Content */}
          <div className="flex flex-col">
            <p className="py-2">
              I am a recently graduated computer science and applied math double major from UC Santa Cruz! I learned a ton about software development, computer systems, mathematical modeling, and other stuff there. Combined with my research experience in computational ecology, leadership work at the Tech4Good lab, and two software engineering internships at NASA JPL, I&apos;ve managed to grow quite a bit as a developer, leader, and problem-solver.
            </p>
            <p className="py-2">
              Of course, there&apos;s still much more for me to learn, so I hope to continue my growth through further work experience and part-time grad school at Georgia Tech, where I am exploring computer systems, software development processes, and more technical topics in depth. I&apos;m excited to see where I can go from here!
            </p>
          </div>
      
          {/* Image */}
          <Image src="/self.jpg" alt="Pic of me at one of the Huntington's botanical gardens" width={260} height={260} className="relative mx-auto mt-6 mb-2 sm:my-0 sm:ml-10" />

        </div>

      </div>
        
    </div>
  );
}