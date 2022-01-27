import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';
// import Footer from '../Footer.jsx'
import HealthHeader from './HealthHeader'
import HealthCareNavBar from './HealthCareNavBar'



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




class Year extends Component {

    constructor(props) {
    super(props);

    this.state = {year: ''};

    this.nextStep = this.nextStep.bind(this);
  }


  nextStep  = (values) =>  { 

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const lp = urlParams.get('lp_request_id')
    //const plan = urlParams.get('health_insurance_plan');
    const time = urlParams.get('coverage_time');
    const income = urlParams.get('household_income');
    const gender = urlParams.get('gender');
    const month = urlParams.get('month');
    const date = urlParams.get('date');

        
    let year = document.getElementById('year').value;

    if(year.length < 4){
        toast.error("😬 Please enter a valid Year!");   
        values.preventDefault();

    }
    else{

      values.preventDefault();
      toast.dismiss();
      console.log("success: ", year);




 this.props.setDOB(month + '/' + date + '/' + year)

      
 this.props.history.push('/health/preexist' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&month=' + month + '&date=' + date + '&year=' + year);
    }
      
  }


    render() {
        return (
            <div>
                <div className="back bg-white">
                    <HealthCareNavBar />
                <HealthHeader />
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">


                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        62%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "62%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

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
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                           What Year Were You Born?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.nextStep} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">

                                              <input className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded zipInput " type="text" name="year" placeholder="####" pattern="\d*" id="year" maxLength={4}/>
                                             </div>

                                             
                                        </div>                                        <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" type="submit">Next</button>

                                       

                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>



                </div>


            </div>

                {/* <Footer /> */}
            </div>
        )
    }
}


export default withRouter(Year)