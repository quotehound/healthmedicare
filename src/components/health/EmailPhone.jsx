import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx'
import Axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NumberFormat  from 'react-number-format';

class EmailPhone extends Component {

   
    constructor(props) {

        super(props);
    
        // this.state = {email_address: ''}
        // this.state = {phone_home: ''}
    
        this.onFinish = this.onFinish.bind(this);
      }
    
    


    state = {
        error: '',
        loading: false,
        response: ''
    }

    onFinish = (values) => {

        let email = document.getElementById('email_address').value;
        let phone = document.getElementById('phone_home').value;


        var realPhone = phone.replace(/[0-9]/g, '');

        document.getElementById('tele').value = phone;

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const zip = urlParams.get('zip_code');
        const pre = urlParams.get('pre_existing_conditions');
        const lp = urlParams.get('lp_request_id')
        const time = urlParams.get('coverage_time')
        const income = urlParams.get('household_income');
        const gender = urlParams.get('gender');
        const people = urlParams.get('household_size');
        const weight = urlParams.get('weight');
        const height = urlParams.get('height');
        const address = urlParams.get('address');
        const fName = urlParams.get('first_name');
        const lName = urlParams.get('last_name');
  

 
        this.setState({
            loading: true 
          }, this.postHealth(this.props.postData));

          this.props.history.push('/thank-you' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&health_insurance_plan=ACA_Plan'  + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&pre_existing_conditions=' + pre + '&household_size=' + people + '&weight=' + weight + '&height=' + height + '&address=' + address + '&first_name=' + fName + '&last_name=' + lName + '&email=' + email + '&phone_number=' + phone )
    };

    postURL = (values) => {
        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const zip = urlParams.get('zip_code');
        const pre = urlParams.get('pre_existing_conditions');
        const lp = urlParams.get('lp_request_id')
        const time = urlParams.get('coverage_time')
        const income = urlParams.get('household_income');
        const gender = urlParams.get('gender');
        const people = urlParams.get('household_size');
        const weight = urlParams.get('weight');
        const height = urlParams.get('height');
        const address = urlParams.get('address');
        const fName = urlParams.get('first_name');
        const lName = urlParams.get('last_name');

       let url = window.location.href;

       document.getElementById('url').value = url; 

    this.props.setURL(url)

    }

    postEmail = (values) => {

        let email = document.getElementById('email_address').value;

        this.props.setEmail(email);
        this.unhide();

    }

    postPhone = (values) => {
        
        let phone = document.getElementById('phone_home').value;

        var realPhone = phone.replace(/\D/g, "");

        console.log("updated phone is " + realPhone)

        this.props.setPhone(realPhone);
        this.unhide();

    }

    unhide(){

        let email = document.getElementById('email_address').value;
        let phone = document.getElementById('phone_home').value;


       if(email.length == 0 || phone.length == 0){
           document.getElementById('next').hidden = true;
       }
       else{
           toast.dismiss()
           document.getElementById('next').hidden = false;

       }

    }


    postHealth = (postData) => {
        console.log(postData);
        Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
          params: postData,
        })

        .then((res) => {
            console.log(res)
            if (res.status === 200) {
              this.setState({
                loading: false,
              },() => {
                this.props.nextStep();
    
              this.props.callMediaAlpha();
            
              });
            }
          })
          .catch((err) => {
            if (err) throw err;
          });

    }





    render() {
        const { response, loading } = this.state

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const firstName = urlParams.get('first_name');


        return (
            <div>
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
                                            99%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                    <div style={{ width: "99%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

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
                                                {firstName}, Last Step!
                                            </span>
                                        </div>
                                    </div>
                                    <form onSubmit={this.onFinish} >
                                        <div className="mt-6">
                                            <div className="w-full flex text-sm leading-5">

                                                <div className="text-sm leading-5 buttonBlockRow">

                                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0" data-container={1}>
                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={1}>

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="email" name="email_address" placeholder="Email" id="email_address" onChange={this.postEmail}  />
                                                        </div>


                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={2}>
                                                        <NumberFormat format="(###) ###-####" mask="_"  className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " id="phone_home" placeholder="Phone Number" name="phone_home" 
                                                        onChange={this.postPhone}/>

                                                        </div>
                                                    </div>





                                                </div>

                                               
                                            </div>

                                          
                                            <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" id="next" type="submit" onClick={this.postURL} hidden={true} >Get My Free Quote!</button>


                                        </div>
                                        <p className="tcpa">  <label> <input type="hidden" id="leadid_tcpa_disclosure" /> By hitting Get My Free Quote above, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our <a href="https://www.quotehound.com/partners"> marketing </a> and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods, or services and that I may call (855) 701-3066 to speak with someone about obtaining an insurance quote.  I acknowledge that I may revoke my consent by emailing “STOP” to <a href="mailto:optout@quotehound.com">optout@quotehound.com.</a> I affirm that I have read and agree to this website's <a href="https://www.quotehound.com/privacy-policy"> Privacy Policy </a> and  <a href="https://www.quotehound.com/terms-conditions">Terms of Use</a> </label> </p>
                                    </form>

                                </div>

                            </div>
                        </div>




                    </div>


                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(EmailPhone)
