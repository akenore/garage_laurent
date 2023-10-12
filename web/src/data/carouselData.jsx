import {Carousel} from 'flowbite-react';
import image1 from '../assets/img/gallery/image1.png'
import image2 from '../assets/img/gallery/image2.png'
export default function Indicators() {
     return (<>
          <Carousel indicators={false} className='h-[480px]'>
               <div className="flex justify-center space-x-10">
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={image1}
                              alt=""/>
                    </div>
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={image2}
                              alt=""/>
                    </div>
               </div>
               <div className="flex justify-center space-x-10">
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={image1}
                              alt=""/>
                    </div>
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={image2}
                              alt=""/>
                    </div>
               </div>
          </Carousel>
     </>)
}
