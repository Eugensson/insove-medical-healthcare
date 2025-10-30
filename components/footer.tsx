import Link from "next/link";
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";

import { Logo } from "@/components/logo";
import { SocialList } from "@/components/social-list";

import { socialsData, quickLinks, openingHoursData } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-37.5">
      <div className="container pb-12 xl:pb-25">
        <ul className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <li className="flex-1">
            <Logo className="mb-7.5" />
            <p className="mb-5 w-9/10">
              Dedicated to modern, patient-centered care and trusted medical
              expertise that supports your health every day.
            </p>
            <ul className="mb-10 space-y-3">
              <li className="flex items-center gap-2">
                <RiMapPinFill size={24} className="text-accent" />
                <address className="not-italic">
                  123, Main st., Chicago, IL
                </address>
              </li>
              <li className="flex items-center gap-2">
                <RiMailFill size={24} className="text-accent" />
                <Link
                  href="mailto:info@insove-medical.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Send email"
                >
                  info@insove-medical.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <RiPhoneFill size={24} className="text-accent" />
                <Link
                  href="tel:+17735551234"
                  rel="noreferrer noopener"
                  aria-label="Call to phone"
                >
                  (773) 555-1234
                </Link>
              </li>
            </ul>
            <SocialList socials={socialsData} />
          </li>
          <li className="flex-1">
            <h4 className="h4 mb-12.5">Quick Links</h4>
            <ul className="flex gap-10">
              {quickLinks.map((col, i) => (
                <li key={i} className="flex-1">
                  <ul className="flex flex-col gap-y-5">
                    {col.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li className="flex-1">
            <h4 className="h4 mb-12.5">Opening Hours</h4>
            <ul className="space-y-5">
              {openingHoursData.map(({ id, days, time }) => (
                <li
                  key={id}
                  className="pb-2.5 flex-1 flex items-center justify-between border-b border-gray-300"
                >
                  <p>{days}</p>
                  <p className="text-accent font-medium">{time}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <p className="py-7.5 border-t border-accent/30 text-center text-base font-light">
        &copy; 2025 Insove - All rights reserved.
      </p>
    </footer>
  );
};
