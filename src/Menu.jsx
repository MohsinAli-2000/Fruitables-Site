

const Menu = () => {
  return (
<div className="mx-4 lg:mx-16 my-4 flex flex-col lg:flex-row items-center justify-between">
  <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left opacity-80 mb-3 lg:mb-0">
    Our Organic <br /> Products
  </h1>
  <div className="mt-3 lg:mt-0 flex flex-wrap justify-center lg:justify-start">
    <a href="#" className="text-xl font-semibold text-white opacity-80 bg-orange-500 px-5 py-3 border rounded-full mx-2 mb-2 lg:mb-0">All Products</a>
    <a href="#" className="text-xl font-semibold opacity-80 bg-gray-200 px-5 py-3 border rounded-full mx-2 mb-2 lg:mb-0">Vegetables</a>
    <a href="#" className="text-xl font-semibold opacity-80 bg-gray-200 px-5 py-3 border rounded-full mx-2 mb-2 lg:mb-0">Fruits</a>
    <a href="#" className="text-xl font-semibold opacity-80 bg-gray-200 px-5 py-3 border rounded-full mx-2 mb-2 lg:mb-0">Bread</a>
    <a href="#" className="text-xl font-semibold opacity-80 bg-gray-200 px-5 py-3 border rounded-full mx-2 mb-2 lg:mb-0">Meat</a>
  </div>
</div>

  )
}

export default Menu
