import Image from "next/image";
import outer from "@/assets/login/outer.png";
import inner from "@/assets/login/inner.png";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Static import → Next infers intrinsic width/height automatically,
          so CSS is free to control the rendered size at each breakpoint. */}
      <Image
        src={outer}
        alt=""
        sizes="(min-width: 1024px) 350px, (min-width: 640px) 300px, 220px"
        className="h-auto w-full rounded-2xl shadow-xs"
        priority
      />

      <Image
        src={inner}
        alt=""
        sizes="(min-width: 1024px) 180px, 40vw"
        className="absolute -right-4 -top-6 h-auto w-[42%] rounded-2xl shadow-xs sm:-right-5 sm:-top-8 lg:-right-6 lg:-top-10 lg:w-[180px]"
      />
    </div>
  );
}