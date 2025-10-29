import { OurTeamSlider } from "@/components/our-team-slider";

export const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 mb-12.5 text-center xl:text-left">Our Team</h2>{" "}
        <OurTeamSlider />
      </div>
    </section>
  );
};
