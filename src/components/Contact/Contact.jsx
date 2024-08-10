import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from '../button/MagicButton'

const Contact = () => {
  return (
    <div id='contact' className='pb-28 px-5 text-center'>
      <h1 className='leading-relaxed py-12 flex justify-center items-center text-3xl gap-4 flex-wrap font-medium lg:text-6xl md:text-4xl  text-blue-950'>
        Ready to take    {'     '}
        <span className='text-purple-600'>
        Your
        </span>
        digital presence to the next level?
      </h1>
      <p className='text-base lg:text-3xl text-blue-950 flex justify-center items-center'>Reach out to me today and let's discuss how I can help you achieve your goals</p>
      <a href="mailto:ghaidaarashed97@gmail.com" className='pt-8 flex justify-center items-center '>
      <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#0d1123]"
          />
      </a>
    </div>
  )
}

export default Contact