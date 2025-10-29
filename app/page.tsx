import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { Stats } from "@/components/stats";
import { Header } from "@/components/header";
import { Services } from "@/components/services";
import { Appointment } from "@/components/appointment";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <Faq />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
