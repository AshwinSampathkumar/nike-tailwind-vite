import { Nav } from "../../components";
import {
  Banner,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../../sections/home";
import RevealOnScroll from "../../animate/RevealOnScroll";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Banner />
      </section>
      <section className="padding">
        <RevealOnScroll>
          <PopularProducts />
        </RevealOnScroll>
      </section>
      <section className="padding">
        <RevealOnScroll>
          <SuperQuality />
        </RevealOnScroll>
      </section>
      <section className="padding-x py-10">
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <RevealOnScroll>
          <CustomerReviews />
        </RevealOnScroll>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <RevealOnScroll type="bounce-in">
          <Subscribe />
        </RevealOnScroll>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
};

export default Home;
