import Image from "next/image";
import outer from "@/assets/login/outer.png";
import inner from "@/assets/login/inner.png"


export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">

      <Image src={outer} alt="" className="w-[410px] rounded-2xl shadow-xs lg:w-[350]" />

      <Image
        src={inner}
        width={180}
        height={230}
        alt=""
        className="absolute -right-6 -top-10 h-[230px] w-[180px] rounded-2xl shadow-xs"
      />

    </div>
  );
}
