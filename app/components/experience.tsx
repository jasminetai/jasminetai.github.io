import Link from "next/link";
import Header from "./header";

export default function Experience(props: { experiences: Record<string, string>[] }) {
  const experiencesJsx = props.experiences.map((exp) =>
    <div key={exp.name} className="flex flex-col py-2 my-2">
      {
        exp.link
        ? <a href={exp.link} className="w-fit text-2xl font-bold underline">{ exp.name }</a>
        : <h2 className="text-2xl font-bold">{ exp.name }</h2>
      }
      <h3 className="pt-1 text-xl font-bold">{ exp.company || 'Project' } | { exp.date }</h3>
      <p className="py-2">{ exp.description }</p>
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-center bg-gradient-to-b from-[#333] via-black to-[#333] pt-14 pb-4" id="experience">
      <div className="flex flex-col mx-6 sm:mx-16">

        {/* Header */}
        <Header text="cat experience.txt" />

        {/* Content */}
        { experiencesJsx }
        
        {/* Resume */}
        <p className="font-bold italic mt-2">
          Psst, there&apos;s plenty more to see in my <Link href="/resume.pdf" target="_blank" className="underline">resume</Link>!
        </p>

      </div>
    </div>
  );
}