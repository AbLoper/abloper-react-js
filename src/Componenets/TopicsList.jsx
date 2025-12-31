import React from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import { GiBugleCall } from "react-icons/gi";
import '../styles/TopicsList.css'

export default function TopicsList() {
    return (

        <MDBContainer>
            <MDBListGroup className='text-center'>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        User Experience & Interface Design
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        Front-End Web Development
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        Back-End Web Development
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        Mobile Application Development
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        MongoDB Database Management
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                    <MDBListGroupItem tag='a' href='#'>
                        Artificial Intelligent Integration
                    </MDBListGroupItem>
                </MDBRipple>
                <MDBBtn className='shareBtn d-flex justify-content-center gap-1 mt-5 border border-light rounded-5'>
                    <GiBugleCall />
                    Hire Me
                </MDBBtn>
            </MDBListGroup>
        </MDBContainer>
    );
}