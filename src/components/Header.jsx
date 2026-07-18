import { Apple, Sidebar } from "lucide-react";

const Header = () => {
  return (
    <div className="py-4 px-4 md:px-10 flex items-center justify-between">
      <div className="flex gap-2 md:gap-10 items-center">
        <a href="/" className="text-xl sm:text-4xl font-bold">
          <span className="text-blue-900">Maxi</span>
          <span className="text-green-700">Mart.uz</span>
        </a>
        <button className="flex items-center gap-2 bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
          <Apple className="text-green-700 w-4 md:w-8" />
          Grocery
        </button>
      </div>
      <button>
        <Sidebar className="text-[#009F7F] flex lg:hidden" />
      </button>
      <ul className="gap-8 items-center hidden lg:flex">
        <li>Shops</li>
        <li>Offers</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li className="px-4 py-2 bg-[#009F7F] text-white rounded-md">Join</li>
      </ul>
    </div>
  );
};

export default Header;
