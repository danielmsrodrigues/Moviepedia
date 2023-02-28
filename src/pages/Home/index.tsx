import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Trending from "../../components/Trending";
import TopRated from "../../components/TopRated";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <TopRated />
      <Footer />
    </>
  );
};

export default Home;
