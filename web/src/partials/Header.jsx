import {Navbar} from 'flowbite-react';
import {useState, useEffect} from 'react';
import dark_logo from '../assets/img/dark-logo.webp'
import white_logo from '../assets/img/white-logo.webp'

export default function NavbarWithCTAButton() {
     const [scrolled, setScrolled] = useState(false);
     const [imageSrc, setImageSrc] = useState(white_logo);
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 200) {
                    setScrolled(true);
                    setImageSrc(dark_logo)
               } else {
                    setScrolled(false);
                    setImageSrc(white_logo)
               }
          };
          window.addEventListener('scroll', handleScroll);
          return() => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);
     return (<div className="flex justify-center item-center mb-20">
          <div className="hidden md:flex justify-between w-full mt-5 text-yallow font-semibold text-md mx-5 xl:mx-32 2xl:mx-80">
               <div className='flex'>
                    <div className="flex items-center">
                         <svg className="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                         </svg>
                         zi des Noix Brûlées, 18200 ORVAL
                    </div>
                    <div className="flex items-center ml-5">
                         <svg className="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                         </svg>
                         02 48 82 00 44
                    </div>
               </div>
               <div className='flex'>
                    <div className="flex items-center">
                         <svg className="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                         </svg>
                         info@carrosserielaurant.com
                    </div>
               </div>
          </div>
          <Navbar fluid rounded
               className={
                    `fixed w-full z-20 top-0 md:top-8 left-0 transition duration-500 fadeIn ${
                         scrolled ? 'md:bg-white/90 text-gray-900 md:top-0' : 'md:bg-white md:bg-opacity-0'
                    }`
          }>
               <Navbar.Brand href="/" className='block md:hidden'>
                    <img alt="Carrosserie Laurant Logo" className="mx-3 h-12"
                         src={dark_logo}/>
               </Navbar.Brand>
               <div className="flex md:order-2 items-end">
                    <Navbar.Toggle/>
               </div>
               <div className="md:flex md:justify-center md:items-center hidden"></div>
               <Navbar.Collapse className={`${scrolled ? 'md:pt-10' : 'md:pt-20'}`}>
                    <Navbar.Link href="#services"
                         className={
                              `text-base md:text-xl ${
                                   scrolled ? 'md:text-gray-800 md:hover:text-gray-600' : 'md:text-white md:hover:text-yallow'
                              }`
                    }>
                         Services
                    </Navbar.Link>
                    <Navbar.Link href="#atelier"
                         className={
                              `text-base md:text-xl ${
                                   scrolled ? 'md:text-gray-800 md:hover:text-gray-600' : 'md:text-white md:hover:text-yallow'
                              }`
                    }>
                         Atelier
                    </Navbar.Link>
                    <Navbar.Brand href="/" className='hidden md:block px-10 h-20'>
                         <img id="logoImage" alt="Carrosserie Laurant Logo"
                              className={
                                   `xl:mx-10 -mt-10 ${
                                        scrolled ? 'h-32 transition duration-300 fadeIn' : 'md:bg-gray-800 md:bg-opacity-0 md:h-32 xl:h-46'
                                   }`
                              }
                              src={imageSrc}/>
                    </Navbar.Brand>

                    <Navbar.Link href="#apropos"
                         className={
                              `text-base md:text-xl ${
                                   scrolled ? 'md:text-gray-800 md:hover:text-gray-600' : 'md:text-white md:hover:text-yallow'
                              }`
                    }>
                         À propos
                    </Navbar.Link>
                    <Navbar.Link href="#contact"
                         className={
                              `text-base md:text-xl ${
                                   scrolled ? 'md:text-gray-800 md:hover:text-gray-600' : 'md:text-white md:hover:text-yallow'
                              }`
                    }>
                         Contact
                    </Navbar.Link>
               </Navbar.Collapse>
          </Navbar>
     </div>)
}
