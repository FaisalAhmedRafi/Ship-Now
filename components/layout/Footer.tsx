import Image from "next/image";
import facebookIcon from "@/assets/Social/FacebookLogo.png";
import twitterIcon from "@/assets/Social/XLogo.png";
import instagramIcon from "@/assets/Social/InstagramLogo.png";
import youtubeIcon from "@/assets/Social/YoutubeLogo.png";
import linkedinIcon from "@/assets/Social/LinkedinLogo.png";

const socials = [facebookIcon, twitterIcon, instagramIcon, youtubeIcon, linkedinIcon];

export function Footer() {
  return (
    <footer className="mt-8 flex flex-col items-center gap-4 border-t border-border px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-0">
      <p className="text-center font-bold sm:text-left">Copyright &copy; 2025 Peterdraw</p>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a href="#" className="hover:text-ink">Privacy Policy</a>
        <a href="#" className="hover:text-ink">Term and conditions</a>
        <a href="#" className="hover:text-ink">Contact</a>
      </div>

      <div className="flex items-center justify-center gap-3">
        {socials.map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-ink hover:bg-surface"
          >
            <Image src={Icon} alt="Social Icon" className="h-6 w-6" />
          </a>
        ))}
      </div>
    </footer>
  );
}