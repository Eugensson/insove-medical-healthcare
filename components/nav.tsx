import Link from "next/link";

import { navLinks } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  itemStyles?: string;
  linkStyles?: string;
}

export const Nav = ({ containerStyles, itemStyles, linkStyles }: NavProps) => {
  return (
    <ul className={containerStyles}>
      {navLinks.map(({ name, href }) => (
        <li key={name} className={itemStyles}>
          <Link href={href} className={linkStyles}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
