import Link from "next/link";
import Header from "./header";

export default function Experience(props: { expJson: Record<string, string>[] }) {
  const expJsx = props.expJson.map((exp) =>
    <div key={exp.name} className="flex flex-col py-3 my-4 bg-gradient-to-r from-[#91919a]/75 px-6 sm:px-16 mr-6 sm:mr-16">
      {
        exp.link
        ? <a href={exp.link} className="w-fit text-xl sm:text-2xl font-bold underline hover:text-[#ddd]">{ exp.name }</a>
        : <h2 className="text-xl sm:text-2xl font-bold">{ exp.name }</h2>
      }
      <h3 className="pt-1 text-lg sm:text-xl font-bold">{ exp.company || 'Project' } | { exp.date }</h3>
      <p className="py-2 text-neutral-100">{ exp.description }</p>
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-center bg-gradient-to-b from-zinc-700 to-black to-60% pt-6 sm:pt-10 pb-4" id="experience">
      <div className="flex flex-col">

        {/* Header */}
        <div className="mx-6 sm:mx-16">
          <Header text="cat experience.json" />
        </div>

        {/* Content */}
        { expJsx }
        
        {/* Resume */}
        <p className="text-right font-bold italic bg-gradient-to-l from-zinc-500/75 py-2 mt-4 ml-6 sm:ml-16 px-6 sm:px-16">
          Psst, there&apos;s plenty more to see in my <Link href="/resume.pdf" target="_blank" className="underline hover:text-[#ddd]">resume</Link>!
        </p>

      </div>
    </div>
  );
}