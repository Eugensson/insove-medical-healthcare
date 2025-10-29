import Link from "next/link";

import { Social } from "@/types";

interface SocialListProps {
  socials: Social[];
}

export const SocialList = ({ socials }: SocialListProps) => {
  return (
    <ul className="flex items-center gap-5 text-accent-tertiary">
      {socials.map(({ icon: Icon, link, ariaLabel }, index) => (
        <li key={index}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="hover:text-accent transition-colors duration-300"
          >
            <Icon size={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
