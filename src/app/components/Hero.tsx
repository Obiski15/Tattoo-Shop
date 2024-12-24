import localFont from "next/font/local";
import Image from "next/image";

import Header from "./Header";

export const rhapsody = localFont({
  src: "../fonts/rhapsody.ttf",
});

function Hero() {
  return (
    <div className="bg-frame bg-no-repeat bg-center">
      <div className="px-[24px] min-[800px]:px-20">
        <Header />
        <div className="block min-[1240px]:flex justify-between items-start">
          <div className="flex flex-col gap-5">
            <div
              className={`${rhapsody.className} w-full text-[80px] leading-[80px] tracking-tight min-[800px]:text-[112px] min-[800px]:leading-[112px] min-[1240px]:w-[481px]`}
            >
              Body paintings that <span className="text-primary">define</span>{" "}
              your soul
            </div>

            <div className="flex justify-between items-center gap-2 w-fit my-5">
              <div className="w-[15px] h-[15px] rotate-45 bg-primary rounded-[2px]"></div>
              <button className="bg-primary py-3 px-6 rounded-lg relative uppercase tracking-widest leading-6 text-lg text-[#1d1b1c]">
                Book a visit
              </button>
              <div className="w-[15px] h-[15px] rotate-45 bg-primary rounded-[2px]"></div>
            </div>

            <div className="flex justify-between items-start gap-5 w-fit my-5">
              <div className="flex justify-center items-center w-[52px] h-[52px] bg-primary rounded-lg">
                <Image
                  src="/icons/time.svg"
                  alt="time"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex justify-between items-start gap-3">
                  <p className="text-primary">Mon-Fri</p>
                  <p>11:00 - 21:00</p>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <p className="text-primary">Sat-Sun</p>
                  <p>14:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-[60%] min-[1240px]:block">
            <Image
              alt="girl-tattoo"
              src="/images/girl.png"
              width={938}
              height={1018}
              className="float-right pt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
