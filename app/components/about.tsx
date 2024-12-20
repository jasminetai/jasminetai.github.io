import Image from 'next/image';
import Header from './header';

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center bg-zinc-700 pt-12 pb-4" id="about">

      <div className="flex flex-col justify-center mx-6 sm:mx-16">
        
        {/* Header */}
        <Header text="whoami" />

        <div className="flex flex-col sm:flex-row items-center">

          {/* Content */}
          <div className="flex flex-col">
            <p className="py-2">
              I am a recently graduated computer science and applied math double major from UC Santa Cruz! I learned a ton about software development, computer systems, mathematical modeling, and other stuff there. A multi-threaded HTTP server, a distributed key-value store, a predictive model for wildfires, and a set of AI agents for Pac-Man are among the projects I&apos;ve done over the course of my undergrad studies.
            </p>
            <p className="py-2">
              I also learned that practical experience from beyond the classroom can be much more educational than courses in some ways, though. Skills like debugging and system design are ones more commonly practiced through work experience than through homework. From my research roles at UC Santa Cruz and software engineering internships at NASA JPL, I&apos;ve managed to become a more proficient developer, a stronger problem-solver, and a more confident leader.
            </p>
            <p className="py-2">
              I hope to continue my growth through further work experience and part-time grad school at Georgia Tech, where I plan to explore computer science at a deeper level, particularly computer systems. I&apos;m excited to see where I can go from here!
            </p>
          </div>
      
          {/* Image */}
          <Image src="/self.jpg" alt="Pic of me at one of the Huntington's botanical gardens" width={300} height={300} className="relative mx-auto mt-6 sm:mt-0 sm:ml-10" />

        </div>

      </div>
        
    </div>
  );
}