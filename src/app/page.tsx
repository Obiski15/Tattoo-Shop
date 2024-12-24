import Image from "next/image";

import DisplayImages from "./components/DisplayImages";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background/50 backdrop-blur-[10px] flex justify-center items-center py-5 min-[800px]:px-20">
        <div className="flex justify-between items-center gap-[52px] capitalize flex-wrap px-[24px]">
          <div className="flex justify-between items-center gap-2">
            <Image
              src="./icons/layers.svg"
              alt="layers"
              width={44}
              height={44}
            />
            <p>Layers</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Image
              src="./icons/flash.svg"
              alt="sisyphus"
              width={44}
              height={44}
            />
            <p>Sisyphus</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Image
              src="./icons/circooles.svg"
              alt="circooles"
              width={44}
              height={44}
            />
            <p>Circooles</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Image
              src="./icons/catalog.svg"
              alt="catalog"
              width={44}
              height={44}
            />
            <p>Catalog</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Image
              src="./icons/quotient.svg"
              alt="quotient"
              width={44}
              height={44}
            />
            <p>Quotient</p>
          </div>
        </div>
      </div>
      <DisplayImages />
      <Reviews />
      <Faq />
      <Footer />
    </>
  );
}
