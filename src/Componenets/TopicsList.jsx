import React from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import { GiBugleCall } from "react-icons/gi";
import '../styles/TopicsList.css'

const topicsList = [
    { title: 'User Experience & Interface Design', link: '' },
    { title: 'Front-End Web Development', link: '' },
    { title: 'Back-End Web Development', link: '' },
    { title: 'Mobile Application Development', link: '' },
    { title: 'MongoDB Database Management', link: '' },
    { title: 'Artificial Intelligent Integration', link: '' }
]

export default function TopicsList() {
    return (

        <MDBContainer>
            <MDBListGroup className='text-center'>

                {
                    topicsList.map(topic => (
                        <MDBRipple key={topic}>
                            <MDBListGroupItem tag="a" href={topic.link}>
                                {topic.title}
                            </MDBListGroupItem>
                        </MDBRipple>
                    ))}

                <MDBBtn className='shareBtn d-flex justify-content-center gap-1 mt-5 border border-light rounded-5'>
                    <GiBugleCall />
                    Hire Me
                </MDBBtn>
            </MDBListGroup>
        </MDBContainer>
    );
}