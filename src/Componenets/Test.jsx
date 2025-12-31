import React from 'react';
import axios from 'axios'
// import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Test() {

    function checkRequest() {
       axios.get('http://127.0.0.1:5000', { withCredentials: true })

            // .then(response => console.log('response', response.data))
            .then(response => console.log('response',response))
            .catch((err) => { console.log('error', err) })
    }
    return (


        <button onClick={checkRequest}>send</button>
    );
}