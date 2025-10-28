import { statsData } from "@/lib/data";

export const Stats = () => {
  return (
    <section className="section">
      <div className="container">
        <ul className="flex flex-col xl:flex-row justify-between gap-y-6">
          {statsData.map(({ title, value }, index) => (
            <li
              key={index}
              className="flex flex-1 flex-col items-center xl:border-r last-of-type:border-none border-accent-tertiary"
            >
              <p className="h1 xl:mb-2 text-accent-tertiary!">{value}</p>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
