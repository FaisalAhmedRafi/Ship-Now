import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo.png";
import logoLogin from "@/assets/logo-login.png";

export function LogoMark({ className, loc }: { className?: string , loc?: string}) {
  
    return (
    
    <Image
      src={loc?.toLowerCase().includes("login")? logoLogin  : logo}
      alt="ShipNow Logo"
      width={32}
      height={32}
      aria-hidden="true"
      className={cn("h-8 w-8 object-contain", className)}
    />
  );
}

export function LogoLockup({
  className,
  markClassName,
  textClassName,
  loc,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  loc?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark className={markClassName} loc={loc} />
      <span className={cn("italic text-xl font-black tracking-tight", textClassName)}>
        SHIPNOW
      </span>
    </div>
  );
}
