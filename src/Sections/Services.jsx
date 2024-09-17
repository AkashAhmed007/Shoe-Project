import ServiceCard from '../Components/ServiceCard'
import {services} from '../Constants'
function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap lg:gap-9 gap-6">
{services.map(service=>(
  <ServiceCard key={service.label} {...service}/>
))}
</section>
  )
}

export default Services