import { Boxes } from '../ui/background-boxes'
import { FaGithub } from "react-icons/fa";
const Webstyle = ({title, des, img, icon,linkcode }) => {
  return (
    <div className="py-40 px-10 md:py-32 md:px-20 lg:p-20 lg:h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col lg:flex-row items-center gap-20">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <img
        src={img}
        alt=""
        className="z-0 lg:h-4/5 lg:w-3/6 object-cover rounded-xl group-hover/card:shadow-xl" />
      <div>
        <p className="md:text-3xl text-xl text-teal-100 pb-10 relative z-0">
          {title}
        </p>
        <p className='text-xl pb-10 text-white relative z-0'>
          {des}
        </p>
        <div className='flex item-center text-white relative text-xl gap-5 pb-10'>
          <p>View Code</p>
          <a href={linkcode} className='text-2xl'><FaGithub /></a>
        </div>
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {icon?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      )
}

export default Webstyle