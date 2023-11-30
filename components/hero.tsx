import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imageData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imageData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900">
        <div className="pt-48 justify-center items-center">
          <div className="text-white text-6xl">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
