export default function Overlay() {
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '97.5%',
                height: '97.5%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                pointerEvents: 'none',
                borderRadius:'.25rem'
            }}
        />
    )
}
