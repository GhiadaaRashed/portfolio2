import { workExperience } from '../../../data/infor'
import { Button } from '../ui/Movingborder'
const Achievment = () => {
  return (
    <div className='py-12 lg:py-20'>
      <h1 className=' py-12 flex justify-center items-center text-3xl gap-4 flex-wrap font-medium lg:text-6xl md:text-4xl  text-blue-950'>
        My   {'     '}
        <span className='text-purple-600'>
        Achievments
        </span>
      </h1>
      <div className='flex flex-wrap justify-center items-center text-3xl lg:gap-20 gap-4 flex-wrap p-12'>
        {workExperience.map((card)=>{
          return(
          <Button
          borderRadius="1.75rem"
          className="bg-slate-900 text-white border-neutral-200  "
        >
          <div className='flex wrap py-14 px-5 gap-5 lg:gap-2 justify-center flex-col lg:flex-row items-center'>
            <img src={card.thumbnail} className='lg:w-28 md:w-20 w-16' alt="" />
            <div className='flex flex-col gap-1'>
            <h1 className='text-lg'>{card.title}</h1>
            <p className='text-slate-200'>{card.desc}</p>
            </div>
          </div>
        </Button>
        )})}
      </div>
    </div>
  )
}

export default Achievment