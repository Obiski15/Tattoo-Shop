import localFont from "next/font/local";
import Image from "next/image";

export const rhapsody = localFont({
  src: "../fonts/rhapsody.ttf",
});

function Newsletter() {
  return (
    <div className="flex flex-col justify-between items-center bg-foreground text-[#1d1b16] gap-10 py-10 px-[24px] rounded-[20px] mt-10 min-[1024px]:translate-y-[50%] min-[1024px]:flex-row min-[1250px]:items-start min-[800px]:px-20 min-[1024px]:mt-0">
      <Image alt="star" src="/icons/mail.svg" width={277} height={224} />
      <div className="w-full flex flex-col justify-between items-start gap-10 min-[1250px]:w-[60%]">
        <h1
          className={`${rhapsody.className} tracking-tight text-[40px] leading-[40px] min-[800px]:text-[64px] min-[800px]:leading-[64px]`}
        >
          Subscribe to our newsletter
        </h1>
        <form
          className="w-full flex flex-col gap-5 min-[1250px]:block min-[1024px]:w-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Enter your email..."
            className="bg-[#F2E4DA] py-5 px-3 focus:outline-none rounded-lg w-full min-[800px]:w-auto"
          />
          <button className="w-full bg-primary py-5 px-3 leading-6 text-lg tracking-widest rounded-xl uppercase min-[1250px]:translate-x-[-4%] min-[800px]:w-auto">
            Contact us now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
