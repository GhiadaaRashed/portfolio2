import { skill } from '../../../data/infor'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
const Skills = () => {
  return (
    <div>
      <h1 className=' py-12 flex justify-center items-center text-3xl gap-4 flex-wrap font-medium lg:text-6xl md:text-4xl  text-blue-950'>
        My   {'     '}
        <span className='text-purple-600'>
        Skills
        </span>
      </h1>
      <InfiniteMovingCards
        items={skill}
        direction="right"
        speed="fast"
      />
    </div>
  )
}

export default Skills