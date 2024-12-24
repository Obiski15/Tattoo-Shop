import Image from "next/image";

function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-[10px] rounded-[32px] flex justify-between items-center gap-[100px] uppercase px-4 py-2 mt-[24px] mb-[50px] tracking-[0.08em] leading-[24px] font-bold min-[1240px]:justify-center">
      <p className="hidden justify-between items-center gap-5 min-[1240px]:flex">
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          Home page
        </span>
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          portfolio
        </span>
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          about us
        </span>
      </p>

      <Image src="/icons/star.svg" alt="star" width={70} height={70} />

      <p className="hidden justify-between items-center gap-5 min-[1240px]:flex">
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          inquiries
        </span>
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          pricing
        </span>
        <span className="border-2 border-transparent hover:border-b-foreground transition-all duration-500 delay-75 cursor-pointer">
          challenges
        </span>
      </p>

      <Image
        src="/icons/menu.svg"
        alt="star"
        width={70}
        height={70}
        className="min-[1240px]:hidden"
      />
    </header>
  );
}

export default Header;
