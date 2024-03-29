import Slider from "../components/Slider";
import Products from "../pages/Products";

const Home = () => {
  return (
    <div className="home overflow-hidden">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
