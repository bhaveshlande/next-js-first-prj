import scaleImg from "public/scale.jpg";
import Hero from "@/components/hero";
export default function Scale() {
  return (
    <div>
      <Hero
        imageData={scaleImg}
        imgAlt="steel factory"
        title="scale your app to infinity"
      />
    </div>
  );
}
