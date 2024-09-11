import { lang } from '../../../data/infor'
const Lang = () => {
  return (
    <div className='lg:px-20 px-10 py-10 flex justify-between md:justify-center items-center gap-6 md:gap-20 flex-wrap'>
      {lang.map((item)=>{
        return(
          <div className='flex gap-1 md:gap-4  justify-center items-center'>
            <img 
              src={item.img} 
              className='w-9 md:w-16 lg:w-20 '
            />
            <h1 className='text-xl text-sky-900 font-bold'>{item.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Lang