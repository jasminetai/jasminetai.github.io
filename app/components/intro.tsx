export default function Intro() {
  return (
    <div className="w-full h-[96svh] flex flex-col justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 w-full h-full items-center px-5 py-24 [background:radial-gradient(100%_100%_at_50%_10%,#000_40%,#3f3f46_85%)]"></div>
      <div className="absolute top-[13%] -z-10 right-0 w-2/3 h-4 bg-gradient-to-l from-zinc-300/75 animate-[fade_1400ms_ease-in-out_450ms_alternate_infinite]"></div>
      <div className="absolute top-[17%] -z-10 right-0 w-1/4 h-3 bg-gradient-to-l from-zinc-300/75 animate-[fade_1400ms_ease-in-out_900ms_alternate_infinite]"></div>
      <div className="absolute top-[21%] -z-10 right-0 w-3/4 h-5 bg-gradient-to-l from-zinc-300/75 animate-[fade_1400ms_ease-in-out_alternate_infinite]"></div>
      <div className="absolute top-[25.5%] -z-10 right-0 w-2/5 h-3 bg-gradient-to-l from-zinc-300/75 animate-[fade_1400ms_ease-in-out_1200ms_alternate_infinite]"></div>
      <div className="absolute top-[29%] -z-10 right-0 w-1/5 h-2 bg-gradient-to-l from-zinc-300/75 animate-[fade_1400ms_ease-in-out_750ms_alternate_infinite]"></div>
      <div className="absolute top-[70%] -z-10 left-0 w-1/3 h-3 bg-gradient-to-r from-zinc-300/75 animate-[fade_1400ms_ease-in-out_300ms_alternate_infinite]"></div>
      <div className="absolute top-[73%] -z-10 left-0 w-1/5 h-4 bg-gradient-to-r from-zinc-300/75 animate-[fade_1400ms_ease-in-out_1200ms_alternate_infinite]"></div>
      <div className="absolute top-[80%] -z-10 left-0 w-1/2 h-2 bg-gradient-to-r from-zinc-300/75 animate-[fade_1400ms_ease-in-out_600ms_alternate_infinite]"></div>
      <div className="absolute top-[82.5%] -z-10 left-0 w-3/4 h-5 bg-gradient-to-r from-zinc-300/75 animate-[fade_1400ms_ease-in-out_alternate_infinite]"></div>
      <div className="absolute top-[87.5%] -z-10 left-0 w-2/5 h-3 bg-gradient-to-r from-zinc-300/75 animate-[fade_1400ms_ease-in-out_900ms_alternate_infinite]"></div>

      {/* Intro content */}
      <div className="flex flex-row mx-6 sm:mx-16 pt-4">
        <div className="text-2xl font-extrabold sm:text-4xl">&gt;</div>
        <div className="flex flex-col gap-2 ml-4">
          <h1 className="text-2xl font-extrabold sm:text-4xl drop-shadow-[0_1.4px_1.4px_rgba(0,0,0)]">hi, I&apos;m Jasmine!</h1>
          <h2 className="text-2xl text-red-500 sm:text-4xl drop-shadow-[0_1.4px_1.4px_rgba(0,0,0)]">UCSC computer science + applied math grad</h2>
          <h2 className="text-2xl text-emerald-500 sm:text-4xl drop-shadow-[0_1.4px_1.4px_rgba(0,0,0)]">OMSCS at Georgia Tech</h2>
          <h2 className="text-2xl text-blue-500 sm:text-4xl drop-shadow-[0_1.4px_1.4px_rgba(0,0,0)]">software dev + computing systems</h2>
        </div>
      </div>

    </div>
  );
}