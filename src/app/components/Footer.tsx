import { connection } from "next/server";
import Image from "next/image";

async function Footer() {
  await connection();

  return (
    <footer className="bg-background/50 px-[24px] pb-10 pt-0 min-[800px]:px-20 min-[1024px]:pt-[200px]">
      <div className="">
        <div className="w-full flex flex-col justify-between items-start min-[700px]:flex-row min-[700px]:items-center">
          <div className="w-[60%] flex flex-col justify-between items-start gap-5 py-5 min-[700px]:flex-row min-[700px]:items-center">
            <Image alt="star" src="/icons/star.svg" width={70} height={70} />
            <p className="border-2 border-l-primary border-transparent pl-5 flex flex-col justify-between items-start gap-5 capitalize">
              <span>Home page</span>
              <span>portfolio</span>
              <span>about us</span>
            </p>
            <p className="border-2 border-l-primary border-transparent pl-5 flex flex-col justify-between items-start gap-5 capitalize">
              <span>inquiries</span>
              <span>pricing</span>
              <span>challenges</span>
            </p>
          </div>
          <div className="flex justify-between items-cente gap-4 pb-5 min-[700px]:pb-0">
            <Image alt="star" src="/icons/youtube.svg" width={32} height={22} />
            <Image alt="star" src="/icons/twitter.svg" width={32} height={32} />
            <Image alt="star" src="/icons/insta.svg" width={32} height={32} />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between items-start pt-5 border-[1px] border-t-foreground border-transparent min-[700px]:flex-row min-[700px]:items-center">
          <div className="flex justify-between items-start flex-col gap-5 min-[700px]:flex-row min-[700px]:items-center">
            <p>Terms and condition</p>
            <p>Privacy policy</p>
          </div>
          <div className="uppercase">
            &copy; {new Date().getFullYear()} _obiski. all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
