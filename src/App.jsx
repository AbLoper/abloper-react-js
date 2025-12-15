import LOGO from './assets/Logo.png';
export default function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#020202ff',
        }}>
        <img
          src={LOGO}
          alt='Abloper Logo'
          style={{ width: '1000px', height: '300px' }}
        />
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: '100px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
          }}>
          <p>This Portfolio Website Will Be Launch In 1/1/2026</p>
        </div>
      </div>
    </>
  );
}
