import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Lottie from "lottie-react";
import Search from '../Assets/search.json';
import './forms.css';

class Match extends Component {

    
    render() {




        const urlSearch = window.location.search;

      const urlParams = new URLSearchParams(urlSearch);

      const firstName = urlParams.get('first_name');

      const phone = urlParams.get('phone_home');

      const tele = document.getElementById('tele').value;


         setTimeout(function(){
                        window.location.href = '/thank-you' + '?first_name=' + firstName + '?phone_home' + phone; 
                     }, 3000);

        return (
            <div>

<div className="bg-blue-500 headerText justify-center align-middle text-center">
                        <h2>Getting Matched With Our Partners...</h2>
                    </div> 

                    <div className="relative flex justify-center text-sm leading-5 con">
                                            <span className="px-2 pt-14 text-black-500 text-3xl bold header">
                                               Sit tight, {firstName}, We Are Matching You!
                                            </span>
                                        </div>
               <Lottie animationData={Search} className="lot" />

        </div>
        );
    }
}

export default withRouter(Match);

