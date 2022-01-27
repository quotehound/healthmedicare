import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HealthConnectMe from './HealthConnectMe';
import MA from './HealthMA'
import HealthHeader from './HealthHeader'

import './forms.css';
class ThankYou extends Component {
    render() {

      const urlSearch = window.location.search;

      const urlParams = new URLSearchParams(urlSearch);

      const firstName = urlParams.get('first_name');

      const phone = urlParams.get('phone_home');

      const tele = document.getElementById('tele').value;

      console.log(phone)
        return (

          
            <div>

                <HealthHeader />
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 maDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className=" pt-1">
            <div className=" mb-2 items-center justify-between">
              
              <div className="text-center justify-center align-center">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 content-center justify-center">
                  {firstName}'s Top Matches
                </span> 
              </div>
            </div>
          
          </div>


          <MA />

          </div>. 


          </div>
          <HealthConnectMe moduleId="1586" phoneNumber={tele}  />

          </div>
  
        )
    }
}

export default withRouter(ThankYou)