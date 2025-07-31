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
              I am a recent computer science and applied math graduate from UC Santa Cruz! I learned a ton about software development, computer systems, mathematical modeling, and other stuff there, and I got to apply it through internships at NASA JPL and working in a couple research labs.
            </p>
            <p className="py-2">
              Of course, there&apos;s still much more for me to learn, so I hope to continue my growth through further work experience and part-time grad school at Georgia Tech, where I am exploring topics in computing systems, machine learning, and more!
            </p>
          </div>
      
          {/* Image */}
          <Image src="/self.jpg" alt="Pic of me at one of the Huntington's botanical gardens" width={240} height={240} className="relative mx-auto mt-6 mb-2 sm:my-0 sm:ml-10" />

        </div>

      </div>
        
    </div>
  );
}