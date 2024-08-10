
import './Navbar.css'
const Navbar = () => {
  return (
      <ul className='z-20 flex gap-5 sm:gap-12 w-1/4 min-w-max rounded-full px-6 py-4 bg-slate-900 fixed border-2 border-cyan-100'>
        <a href="/"><li className='cursor-pointer'>Home</li></a>
        <a href="#about"><li className='cursor-pointer'>About</li></a>
        <a href="#projects"><li className='cursor-pointer'>Projects</li></a>
        <a href="#contact"><li className='cursor-pointer'>Conact</li></a>
      </ul>
  )
}

export default Navbar