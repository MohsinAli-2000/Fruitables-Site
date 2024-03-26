

const Section7 = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row justify-between items-center bg-orange-500 px-16 my-12">
  <div className="md:w-1/2">
    <h3 className="text-4xl md:text-7xl text-white font-bold">Fresh Exotic <br/> Fruits</h3>
    <p className="text-3xl md:text-5xl opacity-60 font-semibold my-2 md:my-4">in Our Store</p>
    <p className="text-lg md:text-xl opacity-70 my-2 md:my-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
    <a className="text-2xl md:text-3xl border rounded-full px-4 md:px-6 py-2 my-2 md:my-6 hover:bg-green-600 text-opacity-20" href="#">BUY</a>
  </div>
  <div className="relative md:mt-4 sm:mt-0 md:w-1/2">
    <div className="absolute top-0 right-0 bg-white text-2xl md:text-6xl z-10 p-4 md:p-6 border rounded-full">
      <span>1Kg </span>
      <span>$50</span>
    </div>
    <img className="mt-12 md:mt-20" src="/Apple-Bucket.png" alt="image" />
  </div>
</div>

    </>
  )
}

export default Section7
