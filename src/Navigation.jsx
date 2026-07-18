import Header from "./components/Header";
import Products from "./components/Products";

const Navigation = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="" style={{ backgroundImage: `url("/bc2 1.png")` }}>
        <Header />
      </div>
      <Products />
    </div>
  );
};

export default Navigation;
