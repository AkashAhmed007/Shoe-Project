import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { statistics } from "../Constants";
import { shoes } from "../Constants";
import { useState } from "react";
function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start  w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="lg:mt-10 md:mt-7 mt-5 xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-palanquin max-sm:text-[60px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="lg:mt-5 mt-3 inline-block text-coral-red">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish nike arrivals,quality comfort,and innovation for your
          active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start w-full flex-wrap mt-20 lg:gap-16 md:gap-10 gap-8">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center z-10 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt=""
          width={500}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, idx) => (
            <div key={idx}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
