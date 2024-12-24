"use client";

import localFont from "next/font/local";
import { useState } from "react";
import Image from "next/image";

export const rhapsody = localFont({
  src: "../fonts/rhapsody.ttf",
});

const reviews: { name: string; review: string }[] = [
  {
    name: "carolina stones",
    review:
      "I recently had the pleasure of getting a tattoo at Fighting Star, and I couldn't be happier with the entire experience. From start to finish, everything about this tattoo shop exceeded my expectations",
  },
  {
    name: "james arter",
    review:
      "I recently visited tattoo Shop for my first tattoo, and the experience was incredible! The artist was so professional and took the time to understand my vision. The shop was clean, the team was friendly, and the final design exceeded my expectations. I’ve already started planning my next tattoo!",
  },
  {
    name: "sophia rodriguez",
    review:
      "tattoo shop is hands down the best tattoo shop I’ve ever been to! The attention to detail, cleanliness, and overall vibe are unmatched. My artist brought my floral design to life perfectly, and I couldn’t be happier. Highly recommend this place to anyone looking for quality work!",
  },
  {
    name: "lily kim",
    review:
      "I can’t stop staring at the beautiful sleeve Ink Haven created for me! The artists are truly gifted, and they made the whole experience fun and comfortable. They explained everything clearly, from design to aftercare. I’ve already recommended them to all my friends!",
  },
  {
    name: "Ethan Myers",
    review:
      "Absolutely phenomenal experience! The team at Ink Haven is incredibly talented and made me feel at ease throughout the process. The shop has a cool, welcoming atmosphere, and my tribal tattoo turned out better than I imagined. This will definitely be my go-to shop moving forward.",
  },
];

function Reviews() {
  const [activeReview, setActiveReview] = useState<string>("sophia rodriguez");

  return (
    <div className="bg-frame py-5 px-[24px] min-[800px]:py-10 min-[800px]:px-[50px]">
      <h1
        className={`${rhapsody.className} w-fit mx-auto text-center text-[40px] leading-[40px] tracking-tight min-[800px]:text-[64px] min-[800px]:leading-[64px]`}
      >
        What clients say?!
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-10 py-5 min-[800px]:py-10">
        <div className="flex flex-start items-center gap-5 px-5 py-[24px] min-[800px]:gap-10 overflow-y-hidden overflow-x-scroll">
          {reviews.map((review, i) => (
            <Image
              key={i + 1}
              alt={review.name}
              src={`/images/client-${i + 1}.png`}
              width={100}
              height={100}
              className={`${review.name === activeReview ? "scale-150" : ""}`}
              onClick={() => setActiveReview(review.name)}
            />
          ))}
        </div>

        <div className="relative w-full max-w-[700px] rounded-2xl bg-[#1E1C17] p-5 min-[800px]:p-10">
          <div className="flex flex-col items-start justify-start gap-5 transition-all">
            <h3
              className={`${rhapsody.className} text-2xl leading-6 tracking-tight capitalize min-[800px]:text-[32px] min-[800px]:leading-[32px]`}
            >
              {reviews.find((review) => review.name === activeReview)?.name}
            </h3>
            <p className="font-medium text-justify text-base tracking-tight min-[800px]:text-xl min-[800px]:leading-[30px]">
              {reviews.find((review) => review.name === activeReview)?.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
