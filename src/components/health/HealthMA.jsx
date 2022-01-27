import React, { Component } from 'react'

class MA extends Component {



    componentDidMount() {

        const renderScript = document.createElement("script");

         renderScript.innerHTML = "window.MediaAlphaExchange = {'data': { 'zip': localStorage.getItem('zip')}, 'placement_id': 'O_lLlIDgDp7Wt1W0Z2IzmjkLjux5FA','sub_1': 'test sub id', 'type': 'ad_unit', 'version': 17}; window.MediaAlphaExchange__load('mediaalpha_placeholder'); ";

         document.body.appendChild(renderScript);

         const script = document.createElement("script");

         script.src = "//insurance.mediaalpha.com/js/serve.js";
         script.async = true;
         document.body.appendChild(script);
    }


    render() {
        return (



                <div/>


   
        )
    }
}

export default MA;