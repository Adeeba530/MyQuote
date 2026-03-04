import { useState } from "react";
import { Menu } from 'lucide-react'
const Header = () => {
    const [isNav, setIsNav] = useState(false)
    const [display, setDisplay] = useState('hidden')

    const handleMenu = () =>{
        setIsNav(!isNav)
        if(isNav){
            setDisplay('block')
        }else{
            setDisplay('hidden')
        }
    }
  return (
    <header className="bg-gray-900 text-white shadow-md">  
      <div className="relative container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          My Website
        </h1>
         <nav className={`${display} absolute right-0 top-14 bg-gray-900 md:block`}>
          <ul className=" md:flex space-x-6 font-medium">
            <li>
              <a href="/" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="block md:hidden" onClick={handleMenu} ><Menu /></button>
      </div>
    </header>
  );
};
export default Header; 