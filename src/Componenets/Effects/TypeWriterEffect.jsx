import Typewriter from "typewriter-effect";
import { MDBContainer } from "mdb-react-ui-kit";
import '../../styles/TypeWriterEffect.css'

export default function TypeWriterEffect() {
    return (
        <MDBContainer style={{
            fontSize: 'clamp(40px,3vw,64px)',
            // minHeight: '100px',
            padding:'5rem 0'
        }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("<p class='text'>Hello <span class='wave'>👋</span></p>")
                        .pauseFor(1200)
                        // .deleteAll()
                        // .deleteChars(7)
                        .typeString("<span>I'm <strong>Abed Slayman</strong></span>")
                        .pauseFor(1200)
                        .deleteAll()
                        // .deleteChars(7)

                        .typeString(
                            "<span class='text'><strong style='color:#8ac926'>MERN</strong><strong style='color:#feff00'>-S</strong>tack W<strong style='color:#dc2f02'>e</strong>b Developer 💻</span>"
                        )
                        .pauseFor(1200)
                        .deleteAll()

                        .typeString("<span class='text'>Mobile <strong style='color:#8ac926'>App</strong>lication Developer 📱</span>")
                        .pauseFor(1200)
                        .deleteAll()

                        .typeString("<span class='text'>U<strong style='color:#8ac926'>X</strong> / U<strong style='color:#feff00'>I</strong> Designer 🎨</span>")
                        .pauseFor(2000)
                        // .deleteAll()
                        .start();
                }}
                options={{
                    loop: true,
                    delay: 60,        // سرعة الكتابة
                    deleteSpeed: 40,  // سرعة الحذف
                    cursor: "_",
                    cursorClassName: "myCursor",
                }}
            />
        </MDBContainer>
    );
}
