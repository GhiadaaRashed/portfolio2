import { lang } from '../../../data/infor'
const Lang = () => {
  return (
    <div className='lg:px-20 px-10 py-10 flex justify-center items-center gap-6 lg:gap-20 flex-wrap'>
      {lang.map((item)=>{
        return(
          <div className='flex lg:gap-4 gap-1 justify-center items-center'>
            <img 
              src={item.img} 
              className='w-9 lg:w-20 md:w-14'
            />
            <h1 className='text-xl text-sky-900 font-bold'>{item.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Lang