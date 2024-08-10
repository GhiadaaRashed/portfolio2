import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { gridItems } from '../../../data/infor'
const About = () => {
  return (
    <section id='about' className="w-screen mx-auto py-28 px-20">
      <BentoGrid>
        {gridItems.map(item=>{
          return(
          <BentoGridItem 
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          />
        )})}
      </BentoGrid>
    </section>
  )
}

export default About