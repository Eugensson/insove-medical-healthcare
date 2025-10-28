import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Header } from "@/components/header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
    </main>
  );
};

export default Home;
