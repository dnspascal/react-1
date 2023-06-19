import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [denis, setNav] = useState(true);
  const handleNav = () => {
    setNav(!denis);
  }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] w-screen mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className="p-4">Home</li>  
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className='md:hidden ' >
        {!denis ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>
      <div className={!denis ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>REACT.</h1>
        <ul className='uppercase p-4'>
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
