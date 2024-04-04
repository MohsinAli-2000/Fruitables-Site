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
        <h1 className="text-4xl lg:text-5xl text-custom-heading font-semibold text-center lg:text-left opacity-70 mb-3 lg:mb-0">
          Our Organic <br /> Products
        </h1>
        <div className="mt-3 lg:mt-0 flex flex-wrap justify-center items-center lg:justify-start">
          <a
            href="#!"
            onClick={() => handleFilterChange("All")}
            className={`text-lg text-custom-black h-fit w-fit py-2 px-4 rounded-full mx-2 mt-2 ${
              selectedFilter === "All"
                ? "bg-custom-orange text-white"
                : "bg-custom-white"
            }`}
          >
            All Products
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Vegetables")}
            className={`text-lg text-custom-black h-fit w-fit py-2 px-4 rounded-full mx-2 mt-2 ${
              selectedFilter === "Vegetables"
                ? "bg-custom-orange text-white"
                : "bg-custom-white"
            }`}
          >
            Vegetables
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Fruits")}
            className={`text-lg text-custom-black h-fit w-fit py-2 px-4 rounded-full mx-2 mt-2 ${
              selectedFilter === "Fruits"
                ? "bg-custom-orange text-white"
                : "bg-custom-white"
            }`}
          >
            Fruits
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Bread")}
            className={`text-lg text-custom-black h-fit w-fit py-2 px-4 rounded-full mx-2 mt-2 ${
              selectedFilter === "Bread"
                ? "bg-custom-orange text-white"
                : "bg-custom-white"
            }`}
          >
            Bread
          </a>
          <a
            href="#!"
            onClick={() => handleFilterChange("Meat")}
            className={`text-lg text-custom-black h-fit w-fit py-2 px-4 rounded-full mx-2 mt-2 ${
              selectedFilter === "Meat"
                ? "bg-custom-orange text-white"
                : "bg-custom-white"
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
      className="flex justify-center items-center mx-8 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
      
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
