import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import NavBar from './Navbar';
import LandingPage from './LandingPage';
import Age from './Age';

// Step 1 
import HealthPlan from './components/health/HealthPlan';
import Enroll from './components/medicare/Enroll';
import Gender from './components/medicare/Gender';
import Month from './components/medicare/Month';
import Day from  './components/medicare/Day';
import Year from './components/medicare/Year';
import Address from './components/medicare/Address';
import Name from './components/medicare/Name';
import EmailPhone from './components/medicare/EmailPhone';
import ThankYou from './components/medicare/ThankYou';

import HealthCoverageTime from './components/health/CoverageTime';
import HealthIncome from './components/health/Income';
import HealthGender from './components/health/Gender';
import HealthMonth from './components/health/Month';
import HealthDay from './components/health/Day';
import HealthYear from './components/health/Year';
import HealthPreExist from './components/health/Preexist';
import HealthHousehold from './components/health/NumberOfPeople';
import HealthHeightWeight from './components/health/HeightWeight';
import HealthAddress from './components/health/Address';
import HealthName from './components/health/Name';
import HealthEmailPhone from './components/health/EmailPhone';
import HealthThankYou from './components/health/ThankYou';
class App extends Component {

  state = {
    mainRoute: '/',

    healthRoutes: [
      '/',
      '/health-plan',
      '/coverage-time',
      '/income',
      '/gender',
      '/month',
      '/day',
      '/year',
      '/preexist',
      '/household',
      '/height-weight',
      '/address',
      '/name',
      '/email-phone',
      '/match',
      '/thank-you',
    ],

    medicareRoutes: [
      '/',
      '/enrolled',
      '/gender',
      '/month',
      '/day',
      '/year',
      '/address',
      '/name',
      '/email-phone',
      '/thank-you',
    ],

    healthPostData: {
      lp_campaign_id: '60adbd314c992',
      lp_campaign_key: 'j3xtKfTcYkw2PFJG9ZLh',
      lp_s4: '12',
      lp_s5: '13',
      landing_page: 'l.com',
      TCPA_Consent: 'Yes',
      TCPA_Language: 'By hitting Get My Free Quote above, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods, or services and that I may call (855) 701-3066 to speak with someone about obtaining an insurance quote. I acknowledge that I may revoke my consent by emailing “STOP” to optout@quotehound.com. I affirm that I have read and agree to this websites Privacy Policy and Terms of Use',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      IP_Address: '',
      useragent: navigator.userAgent,
      zip_code:localStorage.getItem('zip'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      health_insurance_plan: 'Individual Family',
      coverage_time: '',
      household_income: '',
      gender: '',
      month: '',
      day: '',
      year: '',
      dob: '',
      tobacco_use: 'no',
      additional_insured: 'no',
      household_size: '',
      pre_existing_conditions: '',
      weight: '',
      feet: '',
      inches: '',
      address: '',
      first_name: '',
      last_name: '',
      phone_home: '',
      email_address: '',
      entrance_url: '',
      lp_request_id:'',
    },

    medicarePostData: {
      lp_campaign_id: '610208246d0ec',
			lp_campaign_key: 'Yy4MHdVc3ZKWp6q7RXxg',
			lp_s3: '12',
			lp_s4: '13',
			landing_page: 'l.com',
			TCPA_Consent: 'Yes',
			TCPA_Language:'By pressing Get My Free Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our  marketing partners  (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages.  I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies (2) I agree to this websites  Privacy Policy and Terms of Use',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			IP_Address: '',
			user_agent: navigator.userAgent,
			//s1 form fields
			are_you_currently_enrolled_in_both_medicare_part_a_part_b: '',
			//S2 form fields
			gender: '',
      month: '',
      day: '',
      year: '',
			dob: '',
			address: '',
      zip_code: localStorage.getItem('zip'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
			first_name: '',
			last_name: '',
			email_address	: '',
			phone_home: '',
      entrance_url: '',
      lp_request_id: document.getElementById('lp').value,
      gclid: document.getElementById('gclid').value
    }
  }

  changeRoute = () => {
    this.setState({
      route: ''
    });
  };


  render() {
    return (
      <BrowserRouter>
        <div>
      <NavBar />
          <Switch>
            <Route path='/' exact>
              <LandingPage
              setZipCode={(v) => {
                this.setState({
                  medicarePostData: {
                    ...this.state.healthPostData,
                    jornaya_lead_id: document.getElementById('leadid_token').value,
                   // trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                  },

                  healthPostData: {
                    ...this.state.postData,
                    jornaya_lead_id: document.getElementById('leadid_token').value,
                    //trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                  
                  }

                });

              }}
              />
            </Route>
            
            {/* Switch start */}
            <Route path='/age' exact>
                <Age />
            </Route>

            {/* Step 1 of both forms  */}

            {/* Health step 1 */}
            <Route path='/health-plan' exact>
            <HealthPlan
                setPlan={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      health_insurance_plan: v,
                    },
                  });
                }}
              />
            </Route>

            {/* Medicare Step 1 */}
            <Route path='/enrolled' exact>
            <Enroll
                      setEnrolled={(v) => {
                        this.setState({
                          healthPostData: {
                            ...this.state.healthPostData,
                           
                      coverage_time: v,
                            are_you_currently_enrolled_in_both_medicare_part_a_part_b: v,
                          },
                        });
                      }}
                  />
            </Route>

            <Route path='/coverage-time' exact>
              <HealthCoverageTime
                setCoverTime={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      coverage_time: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/income' exact>
              <HealthIncome

                setIncome={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      household_income: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/gender' exact>
              <HealthGender
                setGender={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      gender: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/month' exact>
              <HealthMonth
                setMonth={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      month: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/day' exact>

              <HealthDay
                setDate={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      day: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/year' exact>

              <HealthYear
                setDOB={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      dob: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/preexist' exact >
              <HealthPreExist
                setTabacco={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      pre_existing_conditions: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/household' exact>
              <HealthHousehold 
                setSpouse={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      household_size: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/height-weight' exact>

              <HealthHeightWeight
                setWeight={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      weight: v,
                    },
                  });
                }}

                setFeet={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      feet: v,
                    },
                  });
                }}

                setInches={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      inches: v,
                    },
                  });
                }}
                
              />
            </Route>

            <Route path='/address' exact>
              <HealthAddress

                setAddress={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      address: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path="/name" exact>
              <HealthName
                setFName={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      first_name: v,
                    },
                  });


                }}

                setLName={(v) => {
                  this.setState({
                    healthPostData: {
                      ...this.state.healthPostData,
                      last_name: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/email-phone' exact>
              <HealthEmailPhone
                 email_address={this.state.healthPostData.email_address}
                 phone_home={this.state.healthPostData.phone_home}
 
                 setEmail={(v) => {
                   this.setState({
                     healthPostData: {
                       ...this.state.healthPostData,
                       email_address: v,
                     },
                   });
                 }}
 
                 setPhone={(v) => {
                   this.setState({
                     healthPostData: {
 
                       ...this.state.healthPostData,
                       phone_home: v,
                     },
                   });
                 }}
 
                 setURL={(v) => {
                   this.setState({
                     healthPostData: {
                       ...this.state.healthPostData,
                       entrance_url: v,
                     }
                   })
                 }}
 
 
                 postData={this.state.healthPostData}
              />
            </Route>

           
            
            <Route path='/thank-you' exact>
              <HealthThankYou

                postData2={this.state.healthPostData}
    
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;