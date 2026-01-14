import Styles from '../../styles/Home.module.css'
import bgImage from '../../assets/backgrounds/main-bg.jpg';
import Logo from '../../assets/icons/header/Logo.png';
import TopicsList from '../TopicsList';
import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import TypeWriterEffect from '../Effects/TypeWriterEffect';

export default function Home() {
    return (
        <MDBContainer
            fluid
            style={{
                position: 'relative',
                width: '100%',
                height: '150vh',
                overflow: 'hidden'
            }}
            className='d-flex flex-column justify-content-center align-items-center'
        >
            {/* خلفية متحركة */}
            <MDBCardImage
                className={Styles['kenburns-top']}
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            />

            {/* Logo */}
            <MDBRow
                className='text-center gap-4'
                style={{ marginTop: '4rem' }}>
                <MDBCardImage
                    className={Styles['kenburns-bottom']}
                    src={Logo}
                    alt="Logo"
                    style={{ width: '80vw' }}
                />
                <span
                    style={{
                        fontSize: 'clamp(14px,3vw,56px)',
                        fontFamily: '  "Orbitron", sans-serif',
                        fontOpticalSizing: 'auto',
                        fontWeight: '400',
                        fontStyle: 'normal',
                        // marginBottom:'3rem'
                    }}
                    className={`text-light ${Styles.trackingOutExpand} w-auto m-auto`}>
                    {/* className={`text-light  w-auto m-auto ${styles.sloganText} bg-dark`}> */}
                    When Cr
                    <span className='text-warning'>e</span>
                    <span className='text-success'>a</span>tiv
                    <span className='text-primary'><strong>i</strong></span>ty Meets Code
                </span>

            </MDBRow>

            {/* Text + Options */}
            <MDBRow
                className="d-flex justify-content-center align-items-center w-100 p-3 mt-5">
                <MDBCol xs={12} lg={6}
                    className={`${Styles.typeEffect} mb-5`}>
                    <TypeWriterEffect />
                </MDBCol>
                <MDBCol xs={12} lg={6}
                    className="bg-gradient p-3 rounded-5">
                    <TopicsList />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}