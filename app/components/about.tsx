export default function About() {
  return (
    <div className="w-full h-96 flex flex-col justify-center" id="about">
      <div className="h-min flex flex-row mx-6 sm:mx-16">

        {/* Heading */}
        <div className="text-2xl font-extrabold sm:text-4xl">&gt;</div>
        <div className="flex flex-col gap-2 ml-4">
          <h1 className="text-2xl font-extrabold after:content-['|'] after:animate-[blink_1s_step-end_infinite] sm:text-4xl">whoami</h1>
        </div>

        {/* Content */}
        <p>Back when I started my degree at the University of California, Santa Cruz in 2021, I had a vague idea of what I wanted to do.</p>
        <p>Fast-forward to now: I study computer systems and more in Georgia Tech's online master's program in computer science. I've gained my footing in computer science topics, supplemented by my second major in applied mathematics. I've managed to obtain practical experience via research and internships.</p>
        <p>I look forward to learning still more!</p>
      </div>
      
        {/* Image */}
        
    </div>
  );
}