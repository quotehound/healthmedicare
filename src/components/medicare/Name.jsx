import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import MedicareHeader from './MedicareHeader';

// import Footer from '../Footer';
import './forms.css';

class Name extends Component {


    constructor(props) {
        super(props);

        // this.state = {first_name: ''};
        // this.state = {last_name: ''};


        this.nextStep = this.nextStep.bind(this);

    }

    nextStep = (values) => {

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;


        if(firstName.length < 2) {

            toast.error(" 😬 Please enter your First Name");

            values.preventDefault();
        }

        if (lastName.length < 2) {
            toast.error(" 😬 Please enter your Last Name");

            values.preventDefault();
        }
        if(firstName.length < 2 && lastName.length < 2) {
            toast.error(" 😬 Please enter your full name")
        }

        else{ 
            values.preventDefault();

            toast.dismiss();

        }


       
    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams
    
(urlSearch);

const zip = urlParams.get('zip_code');
const lp = urlParams.get('lp_request_id');
const ab = urlParams.get('ab');
const gender = urlParams.get('gender');
const month = urlParams.get('month');
const day = urlParams.get('day');
const year = urlParams.get('year');
const address = urlParams.get('address')

     
    this.props.history.push('/medicare/email-phone' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&ab=' + ab + '&gender=' + gender + '&month=' + month + '&day=' + day + '&year=' + year + '&address=' + address + '&first_name=' + firstName + '&last_name=' + lastName);

    }

    postFName = (values) => {

        let firstName = document.getElementById('firstName').value;

        this.props.setFName(firstName)
        this.unhide()


    }

    postLName = (values) => {

        let lastName = document.getElementById('lastName').value;

        this.props.setLName(lastName)
        this.unhide()

    }

     unhide(){

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        


       if(firstName.length == 0 || lastName.length == 0){
           document.getElementById('next').hidden = true;
       }
       else{
           toast.dismiss()
           document.getElementById('next').hidden = false;

       }

    }


    render() {
        return (
            <div>
                <div className="back bg-white">
                   <MedicareHeader />
                    <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                        <div className="px-4 py-8 sm:px-10">


                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">

                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                            91%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                    <div style={{ width: "91%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

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
                                                What Is Your Full Name?
                                            </span>
                                        </div>
                                    </div>
                                    <form onSubmit={this.nextStep} >
                                        <div className="mt-6">
                                            <div className="w-full flex text-sm leading-5">

                                                <div className="text-sm leading-5 buttonBlockRow">

                                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0" >
                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="text" name="firstName" placeholder="First Name" id="firstName"  onChange={this.postFName}/>
                                                        </div>


                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" >

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="text" name="lastName" placeholder="Last Name" id="lastName" onChange={this.postLName} />
                                                        </div>
                                                    </div>





                                                </div>
                                            </div>
                                            <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" id="next" type="submit" onClick={this.nextStep} hidden={true}>Next</button>


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

export default withRouter(Name)