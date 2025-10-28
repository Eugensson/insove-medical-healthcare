import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Header } from "@/components/header";
import { Services } from "@/components/services";
import { Appointment } from "@/components/appointment";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
