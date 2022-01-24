import React, { Component } from 'react';




import { withRouter } from 'react-router';

import './forms.css';
// import Footer from '../Footer.jsx'




class Household extends Component {


  onFinish = (values) => {

    values.preventDefault();

    let g = values.currentTarget.dataset.value;

    this.props.setSpouse(g);

    //get URL params

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const lp = urlParams.get('lp_request_id')
  const pre = urlParams.get('pre_existing_conditions');
    const time = urlParams.get('coverage_time')
    const income = urlParams.get('household_income');
    const gender = urlParams.get('gender');


    this.props.history.push('/height-weight' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&pre_existing_conditions=' + pre + '&household_size=' + g);

  }


  render() {
    return (

      <div className="back bg-white">
        <div className="bg-blue-500 headerText justify-center align-middle text-center">
          <h2>Get Your Free Health Insurance Quote</h2>
        </div>
        <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
          <div className="px-4 py-8 sm:px-10">


            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">

                <div className="text-right">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    75%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

              </div>
            </div>


            <div className="test">
              <div className="mt-6">


                <div>
                  <div className="relative flex justify-center text-sm leading-5 con">
                    <span className="px-2 text-black-500 text-3xl bold header">
                      How Many People Are In Your House?
                    </span>
                  </div>
                </div>
                <form onSubmit={this.onFinish} >
                  <div className="mt-6">
                    <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

                      <div className="text-sm leading-5 buttonBlockRow">



                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="1" onClick={(values) => this.onFinish(values)}>1</button>

                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="2" onClick={(values) => this.onFinish(values)}>2</button>

                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="3" onClick={(values) => this.onFinish(values)}>3</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="4" onClick={(values) => this.onFinish(values)}>4</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="5" onClick={(values) => this.onFinish(values)}>5</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="6" onClick={(values) => this.onFinish(values)}>6</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="7" onClick={(values) => this.onFinish(values)}>7</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="8" onClick={(values) => this.onFinish(values)}>8</button>
                        <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="9" onClick={(values) => this.onFinish(values)}>9+</button>
                        

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

export default withRouter(Household)