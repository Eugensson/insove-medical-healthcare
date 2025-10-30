import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Blog } from "@/components/blog";
import { Team } from "@/components/team";
import { Stats } from "@/components/stats";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Brands } from "@/components/brands";
import { Services } from "@/components/services";
import { Newsletter } from "@/components/newsletter";
import { Appointment } from "@/components/appointment";
import { Departments } from "@/components/departments";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <Faq />
      <Departments />
      <Blog />
      <Brands />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
