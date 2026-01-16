import '../styles/Carousel.css'
import Overlay from '../Componenets/Effects/Overlay'
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit'
import TOPICS from '../data/topicsContent'
import { useEffect } from 'react';
import useViewport from './Effects/useViewport';

export default function Carousel() {
    const { isMobile } = useViewport();
    useEffect(() => {
        console.log('isMobile', isMobile)
    }, [isMobile])

    return (
        <div style={{ backgroundColor: '#000' }}>
            <MDBCarousel
                showIndicators
                showControls={isMobile ? false : true}
                fade
                // style={{ height: 'auto' }}
                style={{
                    height: '100vh'
                }}
            >
                {TOPICS.map(topic => (
                    <MDBCarouselItem
                        key={topic.id}
                        itemId={Number(topic.id)}
                        interval={3000}
                        style={{
                            backgroundImage: `url(${topic.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            // height: 'auto',
                            position: 'relative',
                        }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Overlay />

                        <MDBContainer style={{
                            position: 'relative',
                            zIndex: 2,
                            height: 'auto',
                            paddingTop: '2rem'
                        }}>

                            <MDBRow className='flex-column text-light'>

                                <MDBCol className='d-flex flex-column justify-content-center align-items-center gap-3'>
                                    <img
                                        src={topic.icon}
                                        style={{ width: '8rem' }}
                                        alt={topic.title}
                                    />
                                    <h2 style={{ fontSize: 'var(--fs-h1)', fontWeight: 'bold' }}>{topic.title}</h2>
                                </MDBCol>

                                <MDBCol className='d-flex flex-column justify-content-center align-items-start gap-3 p-5'>
                                    <h5 style={{ fontSize: 'var(--fs-h2)' }}>{topic.description}</h5>

                                    <ul className="text-start">
                                        {topic.paragraphs.map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                    </ul>

                                    <h6 style={{ fonetSize: 'var(--fs-body)' }}>{topic.footer}</h6>
                                </MDBCol>

                            </MDBRow>

                        </MDBContainer>

                    </MDBCarouselItem>
                ))}

            </MDBCarousel>
        </div>

    )
}