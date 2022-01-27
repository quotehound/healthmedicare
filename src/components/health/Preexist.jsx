import React, { Component } from 'react';


import HealthHeader from './HealthHeader'
import HealthCareNavBar from './HealthCareNavBar'


  
import { withRouter } from 'react-router';

import './forms.css';
// import Footer from '../Footer.jsx'




class PreExist extends Component {


  onFinish = (values) => {

    values.preventDefault();
    
    let g = values.currentTarget.dataset.value;

    this.props.setTabacco(g);

    //get URL params

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const lp = urlParams.get('lp_request_id')
    const pre = urlParams.get('pre_existing_conditions');
    const time = urlParams.get('coverage_time')
    const income = urlParams.get('household_income');
    const gender = urlParams.get('gender');
    
    

    this.props.history.push('/health/household' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&pre_existing_conditions=' + g);

  }


  render() {
    return (

      <div className="back bg-white"> 
        <HealthCareNavBar />
       <HealthHeader />
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  66%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "66%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
                Do You Have Any Pre-Existing Conditions?
              </span>
            </div>
          </div>
          <form onSubmit={this.onFinish} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
              
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Yes" onClick={(values) => this.onFinish(values)}>Yes</button>
                
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="No" onClick={(values) => this.onFinish(values)}>No</button>
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>
     {/* <Footer /> */}

      </div>
       

    )
  }
}

export default withRouter(PreExist)