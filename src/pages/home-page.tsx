import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ScrollingHero from "@/components/scrolling-hero";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <ScrollingHero />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default HomePage;
