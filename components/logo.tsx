import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex justify-center lg:justify-normal">
      <Image
        src="/assets/img/header/logo.svg"
        alt="Insove Medical Healthcare"
        width={211}
        height={56}
      />
    </Link>
  );
};
