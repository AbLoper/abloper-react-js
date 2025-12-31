import { MDBContainer } from "mdb-react-ui-kit";
import bgImage from '../assets/backgrounds/uxui.jpg';
import Overlay from "./Effects/Overlay";
import TopicContent from "./TopicContent";

export default function TopicBody() {
    return (
        <MDBContainer fluid

            // style={{
            //     backgroundImage: `url(${bgImage})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            //     minHeight: '100vh',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     flexDirection: 'column',
            //     alignItems: 'center',
            //     postion: 'relative',
            // }}
        >
            <Overlay />
            {/* <TopicContent /> */}
        </MDBContainer>
    )
}