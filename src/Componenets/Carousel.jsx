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
        <MDBCarousel
            showIndicators
            showControls={isMobile ? false : true}
            fade
            style={{ background: '#000', padding: '.5rem' }}
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
                        position: 'relative'
                    }}
                >
                    <Overlay />

                    <MDBContainer
                        className="h-100 text-light d-flex flex-column justify-content-between"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <MDBRow className="pt-5 text-center">
                            <MDBCol>
                                <img
                                    src={topic.icon}
                                    style={{ width: '8rem', marginBottom: '1rem' }}
                                    alt={topic.title}
                                />
                                <h2>{topic.title}</h2>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="pb-5">
                            <MDBCol md="8">
                                <h5>{topic.description}</h5>

                                <ul className="text-start">
                                    {topic.paragraphs.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>

                                <h6>{topic.footer}</h6>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCarouselItem>
            ))}
        </MDBCarousel>

    )
}
