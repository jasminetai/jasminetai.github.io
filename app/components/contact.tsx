// import Link from "next/link";
import Header from "./header";

export default function Contact() {
  return (
    <div className="w-full h-96 flex flex-col justify-center" id="contact">
      <div className="h-min flex flex-col mx-6 sm:mx-16">

        {/* Header */}
        <Header text="ls ./contact" />

        {/* Content */}
        <ul>
          <li>
            LinkedIn
          </li>
          <li>
            Github
          </li>
          <li>
            Email
          </li>
        </ul>
        
      </div>
    </div>
  );
}