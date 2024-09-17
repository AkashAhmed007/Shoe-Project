import Button from "../Components/Button"

function Subscribe() {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
<h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from <span className=" text-coral-red">
     Updates
    </span> & Newsletter
</h1>
<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
<input type="text" className="input" placeholder="subscribe@gmail.com" />
<div className="flex max-sm:justify-center items-center max-sm:w-full">
<Button label="Sign Up" fullWidth/>
</div>

</div>

    </section>
  )
}

export default Subscribe