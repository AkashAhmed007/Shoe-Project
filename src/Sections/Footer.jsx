import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../Constants"

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="" width={150} height={46}/>
          </a>
          <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">Get shoe ready for the new term at your nearest Nike store.Find your perfect size in store and get rewards.</p>
          <div className="flex items-center gap-5 mt-8">
          {
            socialMedia.map(icon=>(
              <div key={icon} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))
          }
          </div>
        </div>
        <div className="flex flex-1 lg:gap-10 gap-20 justify-between flex-wrap">
          {
            footerLinks.map(section=>(
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map(link=>(
                    <li key={link.name} className="mt-3 text-white text-base-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer">
                      <a>{link.name}</a>
                      </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between pt-10" >
        <p className="mt-3 text-white text-base-400 font-montserrat leading-normal">@copyright. All right reserved</p>
        <p className="mt-3 text-white text-base-400 font-montserrat leading-normal">Terms & Conditions apply.</p>
      </div>
    </footer>
  )
}

export default Footer