import Button from "../Components/Button"
import {shoe8} from '../assets/images'
function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center gap-10 max-lg:flex-col w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize lg:max-w-lg font-bold">
         We Provide You <span className="lg:mt-5 mt-3 inline-block text-coral-red">Super</span> <br />
         <span className="lg:mt-5 mt-3 inline-block text-coral-red">Quality</span> Shoes
         
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and sytle, our meticulously crufted footwear is design to elevate your experience, providing you with unmatched quality, innovation and a touch of elegant.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and excellence ensures your satisfaction.</p>
        <div className="mt-10">
        <Button label="View details"></Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality