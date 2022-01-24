import React, { Component } from 'react';



  
import { withRouter } from 'react-router';

import './forms.css';
import HeaderTitle from './HeaderTitle';




class Age extends Component {

  

  isMedicare = () => {

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');

    const lp = urlParams.get('lp_request_id')

    this.props.history.push('/enrolled' + '?lp_request_id=' + lp + '&zip_code=' +  zip);


  }

  isHealth = () => {

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');

    const lp = urlParams.get('lp_request_id')

    this.props.history.push('/health-plan' + '?lp_request_id=' + lp + '&zip_code=' +  zip);

  }


  render() {
    return (

      <div className="back bg-white">
        <HeaderTitle />
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  1%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "1%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
                Are you over or under 65 years of age?
              </span>
            </div>
          </div>
          <form>
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Male" onClick={this.isMedicare}>65 or Over</button>


                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Female" onClick={this.isHealth}>Under 65</button>

               
                
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>

      </div>
       

    )
  }
}

export default withRouter(Age)