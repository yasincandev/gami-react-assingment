import { Faq, Features, Hero, PhotoSection, Testimonials } from "@/components";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <PhotoSection />
      <Features />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
