import Image from 'next/image';
import Header from './header';

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center bg-[#333] pt-14" id="about">

      <div className="flex flex-col justify-center mx-6 sm:mx-16">
        
        {/* Header */}
        <Header text="whoami" />

        <div className="flex flex-row items-center">

          {/* Content */}
          <div className="flex flex-col">
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mi vitae velit finibus efficitur. Aenean aliquet nisi a molestie interdum. Morbi euismod, ligula eget gravida suscipit, dui ligula pharetra nulla, quis aliquet ligula turpis quis neque.
            </p>
            <p className="py-2">
              Aliquam volutpat magna vitae accumsan lobortis. Vivamus arcu ex, dictum eu justo eleifend, molestie imperdiet arcu. Suspendisse posuere faucibus enim eu vulputate. Nunc facilisis ligula non felis pellentesque mattis ac a lectus. Aliquam ornare magna suscipit dui blandit, in congue arcu facilisis. Integer pretium nibh eget tellus malesuada semper. Nulla facilisi. Donec non elit ut lorem venenatis lacinia sed id purus. Nam eros nisi, gravida quis sodales a, facilisis in ipsum.
            </p>
            <p className="py-2">
              Nulla id mattis purus. Proin nisi magna, tincidunt imperdiet quam nec, fermentum tincidunt mi.
            </p>
          </div>
      
          {/* Image */}
          <Image src="/self.jpg" alt="Jasmine Tai" width={300} height={300} className="hidden sm:block relative ml-6" />

        </div>

      </div>
        
    </div>
  );
}