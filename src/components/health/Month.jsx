import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx';
import HealthHeader from './HealthHeader'
import HealthCareNavBar from './HealthCareNavBar'



class Month extends Component {


    month = (values) => {

        values.preventDefault();

        let m = values.currentTarget.dataset.value;

        this.props.setMonth(m);

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const zip = urlParams.get('zip_code');
        const lp = urlParams.get('lp_request_id')
        //const plan = urlParams.get('health_insurance_plan');
        const time = urlParams.get('coverage_time');
        const income = urlParams.get('household_income');
        const gender = urlParams.get('gender');


        this.props.history.push('/health/day' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&month=' + m);
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
                                        41%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "41%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What Month Were You Born In?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.month} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">



                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="01" onClick={(values) => this.month(values)}>January</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="02" onClick={(values) => this.month(values)}>February</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="03" onClick={(values) => this.month(values)}>March</button>


                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="04" onClick={(values) => this.month(values)}>April</button>


                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="05" onClick={(values) => this.month(values)}>May</button>


                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="06" onClick={(values) => this.month(values)}>June</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="07" onClick={(values) => this.month(values)}>July</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="08" onClick={(values) => this.month(values)}>August</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="09" onClick={(values) => this.month(values)}>September</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="10" onClick={(values) => this.month(values)}>October</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="11" onClick={(values) => this.month(values)}>November</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="12" onClick={(values) => this.month(values)}>December</button>


                                            </div>
                                        </div>
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

export default withRouter(Month);