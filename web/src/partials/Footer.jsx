// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {Button, Alert} from 'flowbite-react';
import partenaire from '../assets/img/partenaire.webp'
import side_contact from '../assets/img/contact-side.webp'
const Footer = () => {

     const form = useRef();
     const [isSent, setIsSent] = useState(false);
     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_zon9xji', 'template_asvg0ea', form.current, 'iK2i3ECRI8ftdK3vO').then((result) => {
               console.log(result.text);
               form.current.reset();
               setIsSent(true);
               setShowSuccessMessage(true);
          }, (error) => {
               console.log(error.text);
          });
     };
     const dismissSuccessMessage = () => {
          setShowSuccessMessage(false);
     };

     return (<>
          <section className="bg-yallow">
               <div className="flex justify-center">
                    <div className="my-28 mx-5 p-10">
                         <div className="pt-10 mb-12 flex items-center justify-start">
                              <h1 className="font-bold text-2xl md:text-4xl uppercase text-red2">nos partenaires</h1>
                              <svg className='text-red2' xmlns="http://www.w3.org/2000/svg" width="56" height="5" viewBox="0 0 56 5">
                                   <line id="Line_2" data-name="Line 2" x2="56" transform="translate(0 2.5)" fill="none" stroke="currentColor" strokeWidth="5"/>
                              </svg>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 px-8">
                              <img src={partenaire}
                                   alt=""/>
                         </div>
                    </div>
               </div>
          </section>
          <section id='contact' className="bg-yallow">
               <div className="flex justify-center md:bg-footer bg-contain bg-no-repeat bg-bottom"> {/* {
                    successMessage && (<p className="text-green-500"> {successMessage}</p>)
               } */}
                    <form ref={form}
                         onSubmit={sendEmail}>
                         <div className="flex">
                              <div className="hidden md:block">
                                   <img className='w-96'
                                        src={side_contact}
                                        alt="contact photo"/>
                              </div>
                              <div className='p-10 bg-white md:rounded-r-xl'>
                                   <h1 className="font-bold text-2xl md:text-4xl uppercase text-red2 mb-10">Contactez-nous</h1>
                                   <div className='mb-6'>
                                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-red2 focus:border-red2 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red2 dark:focus:border-red2" placeholder="Votre nom" required/>
                                   </div>
                                   <div className='mb-6'>
                                        <input type="text" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-red2 focus:border-red2 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red2 dark:focus:border-red2" placeholder="Téléphone" required/>
                                   </div>
                                   <div className='mb-6'>
                                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-red2 focus:border-red2 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red2 dark:focus:border-red2" placeholder="Adresse e-mail" required/>
                                   </div>
                                   <div className="mb-6">
                                        <textarea name="message"
                                             rows={6}
                                             className="block p-5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red2 focus:border-red2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red2 dark:focus:border-red2"
                                             placeholder="Votre message..."
                                             defaultValue={''}
                                             required/>
                                   </div>
                                   {
                                   isSent && showSuccessMessage ? (<div className="text-green-500 font-bold">
                                        <Alert color="success"
                                             onDismiss={dismissSuccessMessage}>
                                             <span>
                                                  <p>
                                                       Message envoyé avec succès!
                                                  </p>
                                             </span>
                                        </Alert>
                                   </div>) : (<Button type="submit" gradientMonochrome="failure" className="bg-red2 w-full">
                                        Envoyer
                                   </Button>)
                              } </div>
                         </div>
                    </form>
               </div>
               <div className="bg-vGray-400">
                    <div className="flex justify-center space-x-3">
                         <div className="container mx-5 md:mx-32 xl:mx-48 py-28">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                   <div>
                                        <h1 className="text-yallow text-xl uppercase font-bold">coordonnées</h1>
                                        <ul className="max-w-md space-y-1 list-inside pt-5 text-white text-md font-semibold font-segoe">
                                             <li className="flex items-center">
                                                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                       <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                                  </svg>
                                                  +33 02 48 82 00 44
                                             </li>
                                             <li className="flex items-center">
                                                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                       <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                                       <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                                  </svg>
                                                  info@carrosserielaurant.com
                                             </li>
                                             <li className="flex items-center">
                                                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                       <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                                  </svg>
                                                  ZI des Noix Brûlées, 18200 ORVAL
                                             </li>
                                        </ul>
                                   </div>
                                   <div>
                                        <h1 className="text-yallow text-xl uppercase font-bold">heures d&apos;ouverture</h1>
                                        <p className="text-white text-base pt-5 font-semibold font-segoe">Lundi au Samedi : 8h à 12h et de 14h à 18h</p>
                                        <p className="text-white text-base font-semibold font-segoe">Dimanche : Fermé</p>
                                   </div>
                                   <div>
                                        <h1 className="text-yallow text-xl uppercase font-bold">assistance routiére 24/24</h1>
                                        <p className="text-white text-3xl pt-5 font-semibold font-segoe">02 48 82 00 44</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     </>);
};

export default Footer;
