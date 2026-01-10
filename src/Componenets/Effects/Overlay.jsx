import { MDBContainer } from "mdb-react-ui-kit";

export default function Overlay() {
    return (
        <MDBContainer
            fluid
            style={{
                // position: 'fixed',          // يغطي الشاشة دائمًا
                position: 'absolute',          // يغطي الشاشة دائمًا
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95vw',
                height: '95vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
            }}
        />
    );
}
