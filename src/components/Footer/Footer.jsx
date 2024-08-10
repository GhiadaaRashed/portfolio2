import { Boxes } from '../ui/background-boxes'
import { FaRegCopyright } from "react-icons/fa";
import { socialMedia } from '../../../data/infor';
const Footer = () => {
  return (
    <div>
      <div className="px-5 lg:px-20 h-20 relative w-full overflow-hidden bg-slate-900 flex justify-between items-center ">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <p className=" text-xs md:text-lg flex gap-1 items-center justify-center text-center mt-2 text-neutral-300 relative z-20">
          Copyright <FaRegCopyright /> 2024 Ghaidaa Rashed
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>))}
        </div>
      </div>
    </div>
  )
}

export default Footer