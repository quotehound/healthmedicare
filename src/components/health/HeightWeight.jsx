import React, { Component } from 'react';




import { withRouter } from 'react-router';

import './forms.css';
import Footer from '../Footer.jsx'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



class HeightWeight extends Component {


  onFinish = (values) => {

    console.log('pressed')

    values.preventDefault();


    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const lp = urlParams.get('lp_request_id')
    //const plan = urlParams.get('health_insurance_plan');
    const time = urlParams.get('coverage_time')
    const income = urlParams.get('household_income');
    const gender = urlParams.get('gender');
    const pre = urlParams.get('pre_existing_conditions');
    const people = urlParams.get('household_size');



    let weight = document.getElementById('weight').value;

    let feet = document.getElementById('feet').value;

    let inch = document.getElementById('inches').value;

    let height = feet + "'" + inch; 


    if(weight.length < 2){
      toast.error("😬 Please Enter Your Weight!");

      values.preventDefault();

      console.log('checked error')
    }

    else if(feet.length === 0) {
      toast.error("😬 Please Enter Your Height (Feet)!");

      values.preventDefault();

    }

    else if(inch.length === 0) {
      toast.error("😬 Please Enter Your Height (Inches)!");

      values.preventDefault();
    }

    else{
      values.preventDefault();
      toast.dismiss();
      console.log("success: ", weight);

      this.props.history.push('/address' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&pre_existing_conditions=' + pre + '&household_size=' + people + '&weight=' + weight + '&height=' + height);

    }


  
  }

  setWeight = (values) => {

    let weight = document.getElementById('weight').value;

    this.props.setWeight(weight);
    

  }

  // setHeight = (values) => {

  //   let feet = document.getElementById('feet').value;
  //   let inch = document.getElementById('inches').value;

  //   let height = feet + "'" + inch;

  //   this.props.setHeight(height);

  // }

  setFeet = (values) => {
    let feet = document.getElementById('feet').value;
    this.props.setFeet(feet)
  }

  setInch = (values) => {

    let inch = document.getElementById('inches').value;
    this.props.setInches(inch)
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
                    82%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                <div style={{ width: "82%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

              </div>
            </div>


            <div className="test">

              <ToastContainer

                position="top-center"
                autoClose={5000}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={'colored'}
              />
              <div className="mt-6">


                <div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 text-black-500 text-3xl bold header">
                    What is Your Height & Weight </span>
                  </div>
                </div>
                <form onSubmit={this.onFinish} >
                  <div className="mt-6">
                    <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

                      <div className="text-sm flex flex-col justify-center content-center">
                        <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded zipInput " type="text" name="weight" placeholder="Weight" pattern="\d*" id="weight" maxLength={3}  onChange={this.setWeight}/> 


                        <div className=" flex justify-center text-center mt-10 -mx-2 max-w-md">
                  <div className="mb-4 w-full lg:w-1/2 px-2  flex justify-center text-center">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded zipInput" type="text" placeholder="Feet"  pattern="\d*" id="feet" maxLength={1} onChange={this.setFeet} />
                  </div>
                  <div className="mb-4 w-full lg:w-1/2 px-2">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded zipInput" type="text" placeholder="Inches"  pattern="\d*" id="inches" maxLength={2} onChange={this.setInch} />
                  </div>
                </div>


                      </div>


                    </div>


                    <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" onClick={this.onFinish}>Next</button>

                  </div>


                </form>

              </div>

            </div>
          </div>




        </div>
        <Footer />

      </div>


    )
  }
}

export default withRouter(HeightWeight)