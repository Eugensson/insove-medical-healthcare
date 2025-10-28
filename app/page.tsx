import { Hero } from "@/components/hero";
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
      <div className="h-1000" />
    </main>
  );
};

export default Home;
