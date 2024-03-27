import { useState } from "react";
import FruitCard from "./FruitCard";

const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Function to update the selected filter
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const fruitCards = [
    {
      title: "Strawberry",
      category: "Fruits",
      imageSrc: "/strawberry.jpg",
      altText: "Strawberry Image",
    },
    {
      title: "Tomato",
      category: "Vegetables",
      imageSrc: "/tomato.jpg",
      altText: "Tomato Image",
    },
    {
      title: "Grapes",
      category: "Fruits",
      imageSrc: "/grapes.jpg",
      altText: "Grapes Image",
    },
    {
      title: "Potato",
      category: "Vegetables",
      imageSrc: "/potato.jpg",
      altText: "Potato Image",
    },
    {
      title: "Coriander",
      category: "Vegetables",
      imageSrc: "/coriander.jpg",
      altText: "Coriander Image",
    },
    {
      title: "Orange",
      category: "Fruits",
      imageSrc: "/orange.jpg",
      altText: "Orange Image",
    },
    {
      title: "Rasberries",
      category: "Fruits",
      imageSrc: "/rasberries.jpg",
      altText: "Rasberries Image",
    },
    {
      title: "Beef",
      category: "Meat",
      imageSrc: "/bell papper.jpg",
      altText: "Beef Image",
    },
    {
      title: "Bread",
      category: "Bread",
      imageSrc: "/bell papper.jpg",
      altText: "Beef Image",
    },
  ];

  const filteredFruitCards =
    selectedFilter === "All"
      ? fruitCards
      : fruitCards.filter((card) => card.category === selectedFilter);

  return (
    <div className="mx-16">
      <div className="flex justify-between flex-col lg:flex-row">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left opacity-80 mb-3 lg:mb-0">
          Our Organic <br /> Products
        </h1>
        <div className="mt-3 lg:mt-0 flex flex-wrap justify-center lg:justify-start">
          <a
            href="#!"
            onClick={() => handleFilterChange("All")}
            className={`className="text-xl font-semibold text-black opacity-80 px-5 py-1 border rounded-full flex justify-center items-center mx-2 mb-2 lg:mb-0 ${
              selectedFilter === "All"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            All Products
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Vegetables")}
            className={`className="text-xl font-semibold text-black opacity-80 px-5 py-1 border rounded-full flex justify-center items-center mx-2 mb-2 lg:mb-0 ${
              selectedFilter === "Vegetables"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Vegetables
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Fruits")}
            className={`className="text-xl font-semibold text-black opacity-80 px-5 py-1 border rounded-full flex justify-center items-center mx-2 mb-2 lg:mb-0 ${
              selectedFilter === "Fruits"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Fruits
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Bread")}
            className={`className="text-xl font-semibold text-black opacity-80 px-5 py-1 border rounded-full flex justify-center items-center mx-2 mb-2 lg:mb-0 ${
              selectedFilter === "Bread"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Bread
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Meat")}
            className={`className="text-xl font-semibold text-black opacity-80 px-5 py-1 border rounded-full flex justify-center items-center mx-2 mb-2 lg:mb-0 ${
              selectedFilter === "Meat"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Meat
          </a>
        </div>
      </div>

      {/* Render filtered fruit cards */}
      <div className="flex flex-wrap justify-center">
        {filteredFruitCards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-2 my-4 lg:w-1/4 md:w-1/3 sm:w-full"
          >
            <FruitCard
              title={card.title}
              imageSrc={card.imageSrc}
              altText={card.altText}
              category={card.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
