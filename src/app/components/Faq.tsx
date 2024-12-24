"use client";

import localFont from "next/font/local";
import { useState } from "react";
import Image from "next/image";
import Newsletter from "./Newsletter";

export const rhapsody = localFont({
  src: "../fonts/rhapsody.ttf",
});

const data: {
  tag: string;
  question: string;
  answer: { heading: string; description: string }[];
}[] = [
  {
    tag: "process",
    question: "what is the process?",
    answer: [
      {
        heading: "Consultation",
        description:
          "The first step involves discussing your tattoo idea with the artist. You’ll talk about design, placement, and size, and the artist will provide advice on how to bring your vision to life.",
      },
      {
        heading: "Preparation",
        description:
          "After finalizing the design, the artist will prepare the stencil and sanitize the workspace to ensure a safe experience.",
      },
      {
        heading: "Application",
        description:
          "The artist carefully applies the tattoo, checking in with you throughout the process to ensure your comfort and satisfaction.",
      },
      {
        heading: "Aftercare",
        description:
          "Once the tattoo is complete, the artist will guide you through aftercare instructions to ensure proper healing and vibrant results.",
      },
    ],
  },
  {
    tag: "price",
    question: "how you determine price",
    answer: [
      {
        heading: "size",
        description:
          "Tattoo prices are often based on the size of the tattoo. Larger tattoos generally cost more than smaller ones. Some salons may charge per square inch or have set prices for different size categories.",
      },
      {
        heading: "complexity",
        description:
          "The complexity of the design plays a significant role in pricing. More intricate and detailed designs typically require more time and skill, leading to a higher cost.",
      },
      {
        heading: "color",
        description:
          "Color: tattoos with color typically cost more than black and gray tattoos. Vibrant colors can require more work and skill to achieve the desired result",
      },
    ],
  },
  {
    tag: "question",
    question: "can you draw any tattoo",
    answer: [
      {
        heading: "Style",
        description:
          "Our artists are skilled in a wide range of tattoo styles, from traditional to realism, watercolor, and more. We aim to bring your unique vision to life.",
      },
      {
        heading: "Customization",
        description:
          "We specialize in creating custom designs tailored to your preferences. Bring in your ideas, and we’ll collaborate to create something truly one-of-a-kind.",
      },
      {
        heading: "Limitations",
        description:
          "While we strive to accommodate all requests, certain designs may need adjustments to suit the human canvas or ensure lasting quality over time.",
      },
    ],
  },
  {
    tag: "location",
    question: "what is your location",
    answer: [
      {
        heading: "Accessibility",
        description:
          "We are located in the heart of downtown, making us easily accessible by public transport and car. Ample parking is available nearby for your convenience.",
      },
      {
        heading: "Environment",
        description:
          "Our shop is situated in a vibrant area filled with cafes and boutiques, making it an enjoyable destination for your tattoo journey.",
      },
      {
        heading: "Contact Us",
        description:
          "Visit us at [Tattoo Shop 1234 Sunset Boulevard, Los Angeles, CA 90026, United States] or check our website for directions and additional details.",
      },
    ],
  },
];

function Faq() {
  const [activeTab, setActiveTab] = useState<string>("");

  function handleTab(tag: string): void {
    if (activeTab === tag) return setActiveTab("");

    setActiveTab(tag);
  }

  return (
    <div className="bg-frame px-[24px] py-10 min-[800px]:px-20 min-[1024px]:px-40">
      <div className="min-[800px]:px-20 min-[1024px]:px-40">
        <h1
          className={`${rhapsody.className} text-center text-[64px] leading-[64px] tracking-tight pb-10`}
        >
          F.A.Q.
        </h1>

        <div className="flex flex-col justify-between items-start">
          {data.map((el) => (
            <div
              key={el.tag}
              onClick={() => handleTab(el.tag)}
              className="w-full"
            >
              <div className="flex justify-between items-center px-2 py-4 border-b-[1px] border-foreground w-full cursor-pointer">
                <p className="flex-1 uppercase">{el.question}</p>
                <Image
                  alt="tab-control"
                  src={
                    !(el.tag === activeTab)
                      ? "/icons/plus.svg"
                      : "/icons/minus.svg"
                  }
                  width={32}
                  height={32}
                />
              </div>

              {el.tag === activeTab && (
                <ol
                  className="px-2 py-4 list-decimal list-inside"
                  onClick={(e) => e.stopPropagation()}
                >
                  {el.answer.map((ans, i) => (
                    <li
                      key={i + 1}
                      className="text-xl leading-[30px] tracking-tight"
                    >
                      <span className="capitalize font-black">
                        {ans.heading}:
                      </span>{" "}
                      {ans.description}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Faq;
