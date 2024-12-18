// import Link from "next/link";
import Header from "./header";

export default function Experience(props: { resume: string, experiences: Record<string, string>[] }) {
  const experiencesJsx = props.experiences.map((exp) =>
    <div key={exp.name} className="flex flex-col">
      <h2 className="text-2xl font-extrabold">{ exp.name }</h2>
      <h3 className="text-xl font-bold">{ exp.date }</h3>
      <p className="py-2">{ exp.link }</p>
      <p className="py-2">{ exp.description }</p>
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-center" id="experience">
      <div className="flex flex-col mx-6 sm:mx-16">

        {/* Header */}
        <Header text="cat experience.txt" />

        {/* Content */}
        { experiencesJsx }
        
        {/* Resume */}
        
      </div>
    </div>
  );
}