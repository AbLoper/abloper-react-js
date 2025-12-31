import { MDBContainer } from "mdb-react-ui-kit";

export default function Overlay() {
    return (
        <MDBContainer fluid className="overlay" style={{
            width: '97.5%',
            height: '95%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            // borderRadius: '15px',
        }} />
    )
}