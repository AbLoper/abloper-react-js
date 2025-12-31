import { useRef } from "react";
import musicFile from '../../assets/audio/bgMusic.mp3';


export default function BgMusic() {
    const audioRef = useRef(null);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            {/* باقي محتوى الصفحة */}

            {/* عنصر الصوت مخفي */}
            <audio ref={audioRef} loop style={{ display: "none" }}>
                <source src={musicFile} type="audio/mpeg" />
            </audio>

            {/* زر تشغيل الموسيقى */}
            <button
                onClick={playMusic}
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
            >
                ▶️ تشغيل الموسيقى
            </button>
        </div>
    );
}
