export default function Intro() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 w-full h-full items-center px-5 py-24 [background:radial-gradient(100%_100%_at_50%_10%,#000_40%,#333_90%)]"></div>
      <div className="absolute top-[12%] right-0 w-2/3 h-3 bg-gradient-to-l from-zinc-300/75 to-transparent"></div>
      <div className="absolute top-[17%] right-0 w-1/4 h-3 bg-gradient-to-l from-zinc-300/75 to-transparent"></div>
      <div className="absolute top-[22%] right-0 w-3/4 h-3 bg-gradient-to-l from-zinc-300/75 to-transparent"></div>
      <div className="absolute top-[27%] right-0 w-2/5 h-3 bg-gradient-to-l from-zinc-300/75 to-transparent"></div>
      <div className="hidden sm:block absolute top-[32%] right-0 w-1/5 h-3 bg-gradient-to-l from-zinc-300/75 to-transparent"></div>
      <div className="absolute top-[71%] left-0 w-1/3 h-3 bg-gradient-to-r from-zinc-400/75 to-transparent"></div>
      <div className="absolute top-[76%] left-0 w-1/5 h-3 bg-gradient-to-r from-zinc-400/75 to-transparent"></div>
      <div className="absolute top-[81%] left-0 w-1/2 h-3 bg-gradient-to-r from-zinc-400/75 to-transparent"></div>
      <div className="absolute top-[86%] left-0 w-3/4 h-3 bg-gradient-to-r from-zinc-400/75 to-transparent"></div>

      {/* Intro content */}
      <div className="flex flex-row mx-6 sm:mx-16">
        <div className="text-2xl font-extrabold sm:text-4xl">&gt;</div>
        <div className="flex flex-col gap-2 ml-4">
          <h1 className="text-2xl font-extrabold sm:text-4xl">hi, I&apos;m Jasmine!</h1>
          <h2 className="text-2xl text-red-500 sm:text-4xl">UCSC computer science + applied math grad</h2>
          <h2 className="text-2xl text-emerald-500 sm:text-4xl">online MS student at Georgia Tech</h2>
          <h2 className="text-2xl text-blue-500 sm:text-4xl">software dev + computer systems</h2>
        </div>
      </div>

    </div>
  );
}