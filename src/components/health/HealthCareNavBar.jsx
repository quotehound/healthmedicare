import React, { Component } from 'react'

import Logo from '../../Assets/pyhq.png';

class HealthCareNavBar extends Component {
    render() {
        return (
            <div>
                <nav className="relative py-4 px-4 lg:px-10 bg-white z-10">
    <div className="flex justify-between items-center">
      <a className="text-xl text-white font-semibold" href="#" data-config-id="brand">
        <img className="h-7" src={Logo} alt="" width="auto" />
      </a>

      <ul className="md:flex md:flex-row" id="mobileMenu">
  <li className="pr-5"> 
    <a className="text-center inline-block px-2 py-2 text-sm text-white font-bold leading-loose bg-blue-400 hover:bg-blue-600 rounded transition duration-200" href="tel:8883933152" data-config-id="04_button">(888) 393-3152</a> 
  </li>  



</ul>

    </div>
  </nav>
            </div>
        )
    }
}


export default HealthCareNavBar