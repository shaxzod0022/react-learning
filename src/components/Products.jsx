import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/image 1.png",
    price: 17000,
    title: "Banan",
    discount: null,
    count: 1,
  },
  {
    id: 2,
    image: "/image 3.png",
    price: 7000,
    title: "Pomidor",
    discount: 10,
    count: 1,
  },
  {
    id: 3,
    image: "/image 6.png",
    price: 6000,
    title: "Kartoshka",
    discount: 10,
    count: 1,
  },
  {
    id: 4,
    image: "/image 2.png",
    price: 3000,
    title: "Karam",
    discount: null,
    count: 1,
  },
];

const Products = () => {
  const [basket, setBasket] = useState([]);
  console.log(basket);

  const addItem = (id) => {
    setBasket((prev) => {
      return prev.map((i) => (i.id === id ? { ...i, count: i.count + 1 } : i));
    });
  };
  const removeItem = (id) => {
    setBasket((prev) => {
      return prev.map((i) => (i.id === id ? { ...i, count: i.count - 1 } : i));
    });
  };

  return (
    <div className="flex flex-wrap">
      {products.map((item, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
          <div className="shadow-xl w-full">
            <div className="flex flex-col items-center p-5 relative">
              <img className="w-32 h-36" src={item.image} alt={item.title} />
              {item.discount ? (
                <span className="absolute top-5 right-5 bg-[#009F7F] px-2 py-1 text-white rounded-md">
                  {item.discount}%
                </span>
              ) : null}
            </div>
            <div className="p-5">
              <h3 className="text-xl md:text-2xl">{item.price} so'm/kg</h3>
              <h3 className="text-lg md:text-xl">{item.title}</h3>
              <div className="mt-4">
                {basket.find((i) => i.id === item.id) &&
                basket.find((i) => i.id === item.id).count > 0 ? (
                  <div className="bg-[#009F7F] flex justify-between items-center p-3 text-white">
                    <button onClick={() => removeItem(item.id)}>
                      <Minus />
                    </button>
                    <span>{basket.find((i) => i.id === item.id).count}</span>
                    <button onClick={() => addItem(item.id)}>
                      <Plus />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setBasket((i) => [...i, item])}
                    className="w-full flex justify-between bg-gray-100"
                  >
                    <span className="p-3 text-lg">Add to basket</span>
                    <span className="bg-[#E5E7EB] p-3">
                      <Plus />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
