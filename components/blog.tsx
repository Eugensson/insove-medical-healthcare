import Link from "next/link";
import Image from "next/image";

import { blogData } from "@/lib/data";

export const Blog = () => {
  return (
    <section className="container">
      <h2 className="h2 mb-12.5 text-center xl:text-left">Our recents posts</h2>
      <ul className="mb-12.5 flex flex-col xl:flex-row items-center xl:justify-between gap-y-6 xl:gap-y-0">
        {blogData.map(
          ({ id, title, description, imageUrl, category, date }) => (
            <li
              key={id}
              className="max-w-105 rounded-[10px] shadow-custom2 overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={imageUrl}
                  width={420}
                  height={286}
                  alt=""
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 py-1.5 px-4.5 text-white text-base tracking-[2.24px] font-medium uppercase bg-accent-tertiary">
                  {category}
                </div>
              </div>
              <div className="px-5 py-6">
                <data className="mb-4">{date}</data>
                <h3 className="h5 mb-2.5">{title}</h3>
                <p className="line-clamp-3 font-light">{description}</p>
                <Link href="/" className="italic underline text-[#4c5354]">
                  Read more
                </Link>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
