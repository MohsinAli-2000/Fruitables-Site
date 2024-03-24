import AcheivementCard from "./AcheivementCard"


const Acheivements = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-200 my-8 mx-16 rounded-lg">
      <AcheivementCard/>
      <AcheivementCard title="QUALITY OF SERVICE" Rate="99%"/>
      <AcheivementCard title="QUALITY CERTIFICATES" Rate="33"/>
      <AcheivementCard title="AVAILABLE PRODUCTS" Rate="789"/>
    </div>
  )
}

export default Acheivements
