import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex justify-center lg:justify-normal", className)}
    >
      <Image
        src="/assets/img/header/logo.svg"
        alt="Insove Medical Healthcare"
        width={211}
        height={56}
      />
    </Link>
  );
};
