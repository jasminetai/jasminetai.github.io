export default function Intro() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="h-min flex flex-row mx-6 sm:mx-16">
        <div className="text-2xl font-extrabold sm:text-4xl">&gt;</div>
        <div className="flex flex-col gap-2 ml-4">
          <h1 className="text-2xl font-extrabold sm:text-4xl">hi, I'm Jasmine!</h1>
          <h2 className="text-2xl text-red-500 sm:text-4xl">UCSC computer science + applied math grad</h2>
          <h2 className="text-2xl text-emerald-500 sm:text-4xl">online MS student at Georgia Tech</h2>
          <h2 className="text-2xl text-blue-500 sm:text-4xl">software dev + computer systems</h2>
        </div>
      </div>
    </div>
  );
}