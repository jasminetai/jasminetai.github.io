import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full h-96 flex flex-col justify-center" id="contact">
      <div className="h-min flex flex-row mx-6 sm:mx-16">

        {/* Heading */}
        <div className="text-2xl font-extrabold sm:text-4xl">&gt;</div>
        <div className="flex flex-col gap-2 ml-4">
          <h1 className="text-2xl font-extrabold after:content-['|'] after:animate-[blink_1s_step-end_infinite] sm:text-4xl">ls ./contact</h1>
        </div>

        {/* Content */}
        
      </div>
    </div>
  );
}