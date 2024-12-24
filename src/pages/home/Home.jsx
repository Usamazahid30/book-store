import Banner from "./Banner";
import News from "./News";
import Recommened from "./Recommened";
import TopSellers from "./TopSellers";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommened />
      <News />
    </div>
  );
};
export default Home;
