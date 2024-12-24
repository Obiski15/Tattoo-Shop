import localFont from "next/font/local";
import Image from "next/image";

export const rhapsody = localFont({
  src: "../fonts/rhapsody.ttf",
});
function DisplayImages() {
  return (
    <div className="bg-frame py-10 grid grid-cols-1 justify-between items-start px-6 gap-5 min-[800px]:px-20 min-[800px]:grid-cols-2 min-[800px]:grid-rows-2 min-[1240px]:grid-cols-3">
      <div className="bg-[#1d1b16] row-span-2 flex flex-col justify-between items-start gap-5 rounded-[32px] min-[800px]:gap-10">
        <h1
          className={`${rhapsody.className} tracking-tight text-[40px] leading-[40px] p-5 pt-10 min-[500px]:text-[64px] min-[500px]:leading-[64px]`}
        >
          Tailored process will make you scream but then happy!
        </h1>

        <div className="bg-artist bg-repeat-x w-full">
          <Image
            alt="tattoo artist"
            src="/images/tattoo-artist-1.png"
            width={342}
            height={465}
            className="mx-auto px-5 pt-5"
          />
        </div>
      </div>

      <div className="bg-foreground w-full row-span-1 py-5 rounded-[32px] self-start">
        <Image
          alt="tattoo artist"
          src="/images/black-and-white-1.png"
          width={198}
          height={240}
          className="mx-auto"
        />
      </div>

      <div className="bg-[#1d1b16] w-full h-full flex flex-col justify-between items-start row-span-2 rounded-[32px]">
        <div className="relative w-full h-[324px]">
          <Image
            alt="tattoo artist"
            src="/images/tattoo-work-1.png"
            fill={true}
          />
        </div>

        <div className="flex flex-col justify-between gap-5 items-start p-5">
          <h1
            className={`${rhapsody.className} tracking-tight text-[40px] leading-[40px] min-[500px]:text-[64px] min-[500px]:leading-[64px]`}
          >
            highest rated tattoo club in california
          </h1>
          <p>
            Don&apos;t hesitate, no one has ever regretted their tattoos!
            Contact us now, and we will help you!
          </p>
          <button className="bg-primary text-[#1d1b16] py-5 px-8 leading-6 text-lg tracking-widest rounded-xl">
            Contact us now
          </button>
        </div>
      </div>

      <div className="bg-foreground w-full row-span-1 py-5 rounded-[32px] self-end">
        <Image
          alt="tattoo artist"
          src="/images/black-and-white-2.png"
          width={198}
          height={240}
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default DisplayImages;
