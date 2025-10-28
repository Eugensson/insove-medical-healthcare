import Image from "next/image";

import { servicesData } from "@/lib/data";

export const Services = () => {
  return (
    <section>
      <div className="relative -z-10 px-6 xl:px-0 xl:pt-17.5 h-92 max-w-366.5 mx-4 xl:mx-auto flex items-center xl:items-start bg-services bg-cover bg-no-repeat rounded-[20px]">
        <div className="container">
          <div className="xl:mb-15 flex flex-col xl:flex-row items-center text-center xl:text-left">
            <h2 className="mb-4 xl:mb-0 flex-1 h2 text-white!">
              Personalized Medical Care for Your Well-Being
            </h2>
            <p className="flex-1 max-w-2xl xl:max-w-none text-white">
              Experience exceptional healthcare with our trusted specialists. We
              combine advanced medical expertise, modern technology, and
              personalized attention to deliver outstanding patient care.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-8 xl:-mt-36">
        <ul className="px-8 xl:px-0 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {servicesData.map(({ id, title, description, icon }) => (
            <li
              key={id}
              className="p-6 xl:min-h-72 flex flex-col items-center text-center rounded-[10px] shadow-custom2 bg-white"
            >
              <Image
                src={icon}
                width={50}
                height={50}
                alt="Service Icon"
                className="mb-3"
              />
              <h3 className="h3 mb-3">{title}</h3>
              <p className="max-w-75 text-sm font-light leading-normal">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
