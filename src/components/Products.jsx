import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/image 1.png",
    price: 17000,
    title: "Banan",
    discount: null,
  },
  { id: 2, image: "/image 3.png", price: 7000, title: "Pomidor", discount: 10 },
  {
    id: 3,
    image: "/image 6.png",
    price: 6000,
    title: "Kartoshka",
    discount: 10,
  },
  { id: 4, image: "/image 2.png", price: 3000, title: "Karam", discount: null },
];

const Products = () => {
  const [basket, setBasket] = useState([]);

  // 1. Savatga birinchi marta qo'shish
  const addToBasket = (product) => {
    setBasket((prev) => [...prev, { ...product, count: 1 }]);
  };

  // 2. Soni oshirish
  const addItem = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  // 3. Sonini kamaytirish (Soni 1 bo'lsa va - bosilsa, savatdan o'chiradi)
  const removeItem = (id) => {
    setBasket(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item,
          )
          .filter((item) => item.count > 0), // count <= 0 bo'lganlarni o'chirib tashlaydi
    );
  };

  return (
    <div className="flex flex-wrap">
      {products.map((item) => {
        // Unumdorlik uchun: har bir kartochka uchun savatdagi mos mahsulotni bitta o'zgaruvchiga olamiz
        const cartItem = basket.find((i) => i.id === item.id);

        return (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={item.id}>
            <div className="shadow-xl w-full">
              <div className="flex flex-col items-center p-5 relative">
                <img
                  className="w-32 h-36 object-contain"
                  src={item.image}
                  alt={item.title}
                />
                {item.discount && (
                  <span className="absolute top-5 right-5 bg-[#009F7F] px-2 py-1 text-white rounded-md">
                    {item.discount}%
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl md:text-2xl">{item.price} so'm/kg</h3>
                <h3 className="text-lg md:text-xl">{item.title}</h3>

                <div className="mt-4">
                  {cartItem ? (
                    /* Savatda bor bo'lsa: + va - tugmalari ko'rinadi */
                    <div className="bg-[#009F7F] flex justify-between items-center p-3 text-white rounded">
                      <button onClick={() => removeItem(item.id)}>
                        <Minus size={18} />
                      </button>
                      <span className="font-bold">{cartItem.count}</span>
                      <button onClick={() => addItem(item.id)}>
                        <Plus size={18} />
                      </button>
                    </div>
                  ) : (
                    /* Savatda yo'q bo'lsa: Add to basket tugmasi ko'rinadi */
                    <button
                      onClick={() => addToBasket(item)}
                      className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition rounded overflow-hidden"
                    >
                      <span className="p-3 text-lg">Add to basket</span>
                      <span className="bg-[#E5E7EB] p-3">
                        <Plus size={18} />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
