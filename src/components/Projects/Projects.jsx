import { projects } from '../../../data/infor'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div id='projects' className='py-10 px-5   lg:px-10' >
      <h1 className='flex justify-center items-center text-3xl gap-4 flex-wrap font-medium lg:text-6xl md:text-4xl  text-blue-950'>
        A small selection of  {'     '}
        <span className='text-purple-600'>
          recent projects
        </span>
      </h1>
      <div className="grid justify-center lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-10 mt-10 gap-y-2 py-10">
        {projects.map((item) => {
          return (
            <div className=' flex items-center justify-center '>
              <CardContainer className="inter-var width[300px] lg:width[600px]">
                <CardBody className="bg-slate-950 relative group/card  dark:hover:shadow-2xl border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-sky-100"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      as="button"
                      className="px-4 py-2 rounded-xl bg-slate-300 text-sky-950 font-bold"
                    >
                      <Link to={`/details/${item.id}`}>Show Details</Link>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      target="__blank"
                      className="text-sky-200 font-bold"
                    >
                      <a href={item.link} className='flex gap-x-1 justify-center items-center'>Check Live Site <FaLocationArrow /></a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects