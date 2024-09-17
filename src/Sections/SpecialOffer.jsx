import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

function SpecialOffer() {
  return (
    <section className="max-container flex justify-wrap items-center gap-10 max-xl:flex-row-reverse">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-6xl font-palanquin capitalize lg:max-w-lg font-bold">
        <span className="lg:mt-5 mt-3 inline-block text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and sytle, our meticulously crufted footwear is design to elevate your experience, providing you with unmatched quality, innovation and a touch of elegant.
        </p>
        <p className="mt-6 lg:max-w-lg info-text"> Ensuring premium comfort and sytle, our meticulously crufted footwear is design to elevate your experience, providing you with unmatched quality, innovation and a touch of elegant.</p>
        <div className="mt-10 flex flex-wrap gap-6">
        <Button label="Shop Now" iconURL={arrowRight}></Button>
        <Button label="View Details" backgroundColor="bg-white" borderColor="border-slate-gray"
        textColor="text-slate-gray"
        ></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer