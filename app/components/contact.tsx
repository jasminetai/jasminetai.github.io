import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-center pt-6 sm:pt-10 pb-6 bg-gradient-to-b from-black to-zinc-500/75" id="contact">
      <div className="h-min flex flex-col mx-6 sm:mx-16">

        {/* Header */}
        <Header text="ls ./contact" />

        {/* Content */}

        <p className="py-2">
          Feel free to shoot me an email at <strong>jasminecktai@gmail.com</strong>. I try to respond to inquiries within 1-2 days!
        </p>
        <ul className="flex flex-row gap-6 py-2 my-2 invert">
          <Link href="mailto:jasminecktai@gmail.com" target="_blank" passHref>
            <Image src="/email.svg" alt="email icon" width={50} height={50} className="hover:invert-[.2]" />
          </Link>
          <Link href="https://github.com/jasminetai" target="_blank" passHref>
            <Image src="/github.svg" alt="github icon" width={50} height={50} className="hover:invert-[.2]" />
          </Link>
          <Link href="https://www.linkedin.com/in/jasmine-tai-1b196421a/" target="_blank" passHref>
            <Image src="/linkedin.svg" alt="linkedin icon" width={50} height={50} className="hover:invert-[.2]" />
          </Link>
        </ul>
        
      </div>
    </div>
  );
}