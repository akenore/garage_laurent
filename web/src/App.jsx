import './assets/App.css'
import Header from './partials/Header'
import Footer from './partials/Footer'

// Images
import line from './assets/img/svg/line.svg'
import image1 from './assets/img/gallery/image1.png'
import image2 from './assets/img/gallery/image2.png'
import image3 from './assets/img/gallery/image3.png'
import image4 from './assets/img/gallery/image4.png'
import arrxpert from './assets/img/arrxpert.webp'
import ccaq from './assets/img/ccaq.webp'

import cardsData from './data/cardsData'
import Indicators from './data/carouselData'
import atelierData from './data/atelierData'

function App() {
     return (<>
          <div className="bg-vGray-20 scroll-smooth">
               <main className="bg-hero-mobile md:bg-hero-web bg-contain bg-no-repeat">
                    <Header/>
                    <div className="pt-10 md:pt-40 xl:pt-72">
                         <h1 className="text-2xl md:text-4xl xl:text-7xl flex justify-center items-center mb-4 text-white font-semibold">ATELIER DE CARROSSERIE</h1>
                         <h2 className="text-2xl md:text-4xl xl:text-7xl flex justify-center items-center text-yallow font-semibold">ULTRA MODERN</h2>
                         <div className='flex justify-center items-center -mt-6'>
                              <img src={line}
                                   alt="line icone"/>
                         </div>
                         <section id='services' className="flex justify-center mb-20">
                              <div className="mx-5">
                                   <div className="flex justify-center pt-10 xl:pt-70 2xl:pt-80">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-20"> {
                                             cardsData.map((card, index) => (<div key={index}
                                                  className="flex">
                                                  <a href="#" className="flex-1 block md:max-w-[253px] p-6 bg-white border border-white rounded-lg shadow group hover:bg-red hover:border-red text-red group-hover:text-yallow">
                                                       <div className="flex justify-center mb-5 group-hover:text-yallow"> {
                                                            card.logo
                                                       } </div>
                                                       <h1 className="mb-2 text-2xl text-center font-semibold tracking-tight uppercase group-hover:text-yallow"> {
                                                            card.title
                                                       } </h1>
                                                       <div>
                                                            <p className="mb-3 font-normal text-vGray-200 group-hover:text-white text-center"> {
                                                                 card.content
                                                            } </p>
                                                            <div className="flex items-center  group-hover:text-white"> {
                                                                 card.extraSVG
                                                            }
                                                                 {
                                                                 card.extraText
                                                            } </div>
                                                       </div>

                                                  </a>
                                             </div>))
                                        } </div>
                                   </div>
                                   <div className="pt-20 md:pt-40 mb-8 flex items-center">
                                        <h1 className="font-bold text-2xl md:text-4xl uppercase text-red2">Un aperçu de notre atelier</h1>
                                        <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="56" height="5" viewBox="0 0 56 5">
                                             <line id="Line_2" data-name="Line 2" x2="56" transform="translate(0 2.5)" fill="none" stroke="#b30015" strokeWidth="5"/>
                                        </svg>
                                   </div>
                                   <div className="flex space-x-8">
                                        <div>
                                             <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                                  src={image1}
                                                  alt=""/>
                                        </div>
                                        <div>
                                             <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                                  src={image2}
                                                  alt=""/>
                                        </div>
                                   </div>
                                   <div className="flex space-x-8 mt-8">
                                        <div>
                                             <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                                  src={image3}
                                                  alt=""/>
                                        </div>
                                        <div>
                                             <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                                  src={image4}
                                                  alt=""/>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <section id='atelier' className="flex justify-center bg-vGray-30">
                              <div className="mx-5 py-28">
                                   <div className="mb-8 flex items-center">
                                        <h1 className="font-bold text-2xl md:text-4xl uppercase text-red2">équipements</h1>
                                        <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="56" height="5" viewBox="0 0 56 5">
                                             <line id="Line_2" data-name="Line 2" x2="56" transform="translate(0 2.5)" fill="none" stroke="#b30015" strokeWidth="5"/>
                                        </svg>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:mb-10">
                                        <div>
                                             <ul className="max-w-md space-y-3 xl:text-xl text-vGray-300 list-inside dark:text-gray-400 font-semibold font-segoe">
                                                  <li className="flex items-center">
                                                       <svg className="w-5 h-5 mr-2 text-red dark:text-red flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                       </svg>
                                                       BANC DE REDRESSEMNT VISION 3D
                                                  </li>
                                                  <li className="flex">
                                                       <svg className="w-5 h-5 mr-2 text-red dark:text-red flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                       </svg>
                                                       SOUDURE PAR POINT D’ORIGINE « CAR-O-LINER »
                                                  </li>
                                             </ul>
                                        </div>
                                        <div>
                                             <ul className="max-w-md space-y-3 xl:text-xl text-vGray-300 list-inside dark:text-gray-400 font-semibold font-segoe">
                                                  <li className="flex items-center">
                                                       <svg className="w-5 h-5 mr-2 text-red dark:text-red flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                       </svg>
                                                       SYSTÈME D’ASPIRATIONS « ROTOVAC »
                                                  </li>
                                                  <li className="flex items-center">
                                                       <svg className="w-5 h-5 mr-2 text-red dark:text-red flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                       </svg>
                                                       CHAMBRE DE PEINTURE MODERNE
                                                  </li>
                                             </ul>
                                        </div>
                                        <div>
                                             <ul className="max-w-md space-y-3 xl:text-xl text-vGray-300 list-inside dark:text-gray-400 font-semibold font-segoe">
                                                  <li className="flex items-center">
                                                       <svg className="w-5 h-5 mr-2 text-red dark:text-red flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                       </svg>
                                                       SYSTÈME D’ASPIRATIONS « ROTOVAC »
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <Indicators/>
                              </div>
                         </section>
                         <section className="bg-vGray-20">
                              <div className="flex justify-center">
                                   <div className="my-28 mx-5 p-10 bg-red2 rounded-3xl">
                                        <div className="pt-10 mb-12 flex items-center justify-start">
                                             <h1 className="font-bold text-2xl md:text-4xl uppercase text-white">Un aperçu de notre atelier</h1>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="56" height="5" viewBox="0 0 56 5">
                                                  <line id="Line_2" data-name="Line 2" x2="56" transform="translate(0 2.5)" fill="none" stroke="#fff" strokeWidth="5"/>
                                             </svg>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 px-8"> {
                                             atelierData.map((data, index) => (<div className='max-w-sm'
                                                  key={index}>
                                                  <ul className="max-w-md space-y-1 mb-6">
                                                       <li className="flex item-center"> {
                                                            data.icon
                                                       }
                                                            <h1 className="text-yallow uppercase font-bold text-xl max-w-[170px] py-5"> {
                                                                 data.title
                                                            }</h1>
                                                       </li>
                                                  </ul>
                                                  <p className="text-white "> {
                                                       data.content
                                                  } </p>
                                             </div>))
                                        } </div>
                                   </div>
                              </div>
                         </section>
                         <section id='apropos' className="flex justify-center bg-white">
                              <div className="container mx-5 py-28">
                                   <div className="mb-8 flex items-center">
                                        <h1 className="font-bold text-2xl md:text-4xl uppercase text-red2">a propos du centre</h1>
                                        <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="56" height="5" viewBox="0 0 56 5">
                                             <line id="Line_2" data-name="Line 2" x2="56" transform="translate(0 2.5)" fill="none" stroke="#b30015" strokeWidth="5"/>
                                        </svg>
                                   </div>
                                   <div className="grid md:grid-rows-1 md:grid-flow-col gap-8 xl:gap-20">
                                        <div className="md:row-span-3">
                                             <img className="w-72 mb-20"
                                                  src={ccaq}
                                                  alt="arrXpert logo"/>
                                             <img className="w-72 mb-20"
                                                  src={arrxpert}
                                                  alt="ccaq logo"/>
                                        </div>
                                        <div className=" text-vGray-200 xl:px-20 max-w-4xl">
                                             <p className="mb-6">
                                                  Duval carrosserie membre du réseau Carrxpert est une succursale 
                                                  de la bannière DUVAL qui compte sur près de 100 ans d&apos;expérience. 
                                                  Nous avons une grande expertise et expérience que nous partageons volontiers avec notre clientèle. 
                                                  Notre entreprise est en processus de formation I Car Gold, 
                                                  certifié Toyota Canada et en démarche pour la certification Volkswagen Canada et Mercedes Canada. 
                                                  De plus, depuis le 1er novembre 2016 nous sommes le réparateur officiel de Honda Boucherville 
                                                  et en démarche pour la certification Honda Canada. Tout cela dans le but de vous assurer un service de qualité.

                                             </p>
                                             <p className="mb-6">
                                                  Nos professionnels de la peinture de carrosserie, forts de leur formation Pce avec Akzo Nobel, 
                                                  utilisent les produits les plus réputés sur le marché et peuvent ajuster leur travail 
                                                  à toute forme de surfaces. C&apos;est dans l&apos;esprit de cette volonté assumée de toujours être 
                                                  à l&apos;avant-garde que tous nos outils sont renouvelés pour être à la fine pointe de la plus 
                                                  récente technologie dans notre domaine. Nous avons les outils nécessaires pour travailler 
                                                  sur tous les types de voiture avec les nouveaux alliage que ce soit avec de l&apos;acier à haute 
                                                  résistance, le nouvel aluminium, ou même le boron et le carbone.
                                             </p>
                                             <p className="mb-6">
                                                  Duval Carrosserie est la référence dans la région du Grand Montréal en matière de carrosserie, 
                                                  redressement de chassis, réparation de pare-brise, peinture, esthétique et de débosselage sans peinture.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </main>
          </div>
          <Footer/>
     </>)
}

export default App
