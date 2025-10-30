import Image from "next/image";

import { brandData } from "@/lib/data";

export const Brands = () => {
  return (
    <section className="section">
      <div className="container">
        <ul className="flex flex-col xl:flex-row items-center justify-between gap-y-12 xl:gap-y-0">
          {brandData.map(({ id, label, imageUrl }) => (
            <li key={id}>
              <Image src={imageUrl} alt={`${label} logo`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
