/** @format */

import React from "react";
import Logo from "../images/png";

function Footer() {
   return (
      <div>
         <nav className="bg-black">
            <div className="mx-auto px-4">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img
                        src="{Logo }"
                        alt="Netflix Logo"
                        className="h-10"
                     />
                  </div>
                  <div className="flex items-center">
                     <a
                        href="#"
                        className="text-white hover:text-gray-300 text-sm mr-4"
                     >
                        Home
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-gray-300 text-sm mr-4"
                     >
                        TV Shows
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-gray-300 text-sm mr-4"
                     >
                        Movies
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-gray-300 text-sm mr-4"
                     >
                        New & Popular
                     </a>
                     <a
                        href="#"
                        className="text-white hover:text-gray-300 text-sm mr-4"
                     >
                        My List
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Footer;
