import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";
export default function Performance() {
  return (
    <div>
      <Hero
        imageData={performanceImg}
        imgAlt="we serve high performance application"
        title="We server high Professional Cloud Applications"
      />
    </div>
  );
}
