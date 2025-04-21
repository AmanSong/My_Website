import "./Education.css"
import { useState } from "react"
import ImageModal from "../ImageModal"

const Education = () => {

    const [selectedImage, setSelectedImage] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const clickedImage = (image) => {
        setSelectedImage(image)
        setShowModal(true)
    }

    const modal = (
        <ImageModal show={showModal} onClose={() => setShowModal(false)} image={selectedImage} />
    )

    const content = (
        <div className="centered-div">
            <div className="About-Me-Section">
                <p style={{ fontSize: 3 + 'em' }}>
                    Education 
                </p>

                <div className="Secondary-Section" style={{ marginTop: 5 + 'em' }}>
                    <p style={{ fontSize: 2 + 'em' }}>
                        Secondary School 📖
                    </p>
                    <p style={{ fontSize: 1.25 + 'em' }}>
                        Moyle Park College - (2015-2020)
                    </p>
                    <div style={{ marginTop: 2 + 'em' }}>
                        <p>
                            I attended "Moyle Park" for my secondary education, not much can be said but
                            it helped shape me to become who I am today. Looking back now, despite all the
                            struggles and hardships, I had a really good time. Many of my secondary school
                            friends have long since parted ways and I probably won't see them any time soon
                            but, I wish them all a prosperous future.
                        </p>
                    </div>
                </div>

                <div className="Secondary-Section" style={{ marginTop: 5 + 'em' }}>
                    <p style={{ fontSize: 2 + 'em' }}>
                        College 🎓
                    </p>
                    <p style={{ fontSize: 1.25 + 'em' }}>
                        Technological University Dublin - (2020-2024) <br></br>
                        Computer Science - Bachelors <br></br>
                        First Class Honors 1.1
                    </p>
                    <div style={{ marginTop: 2 + 'em' }}>
                        <p>
                            After secondary school, I attended TUD to pursue a degree in computer science. This 
                            was the beginning of my journey into not just technology but as a person as well.
                        </p>
                        <p style={{ marginTop: 1 + 'em' }}>
                            It was a difficult journey to say the least, assignments, tests and exams were always
                            looming around the corner and many of my classmates began to drop as the years gone by.
                            However, what kept me going was not only my family but my new friends that I made,
                            they are all extremely smart and talented and were always be my side when the going got tough.
                        </p>
                        <p style={{ marginTop: 1 + 'em' }}>
                            We all persevered together as a team and on the 31st of October 2024, our hard work paid off
                            and we all received our bachelors degree in computer science.
                        </p>
                    </div>

                    <div className="Graduation-Images">
                        <img onClick={() => clickedImage("Images/Self_Portrait.png")} id="grad-image1" src="Images/Self_Portrait.png" alt="MeInGown"/>
                        <img onClick={() => clickedImage("Images/grad-image1.jpg")} src="Images/grad-image1.jpg" alt="SelfieWithFriends"/>
                        <img onClick={() => clickedImage("Images/grad-image2.jpg")} src="Images/grad-image2.jpg" alt="MeInGown"/>
                        <img onClick={() => clickedImage("Images/grad-image3.jpg")} id="grad-image2" src="Images/grad-image3.jpg" alt="MeInGown"/>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="Education-Page">
            {content}
            {modal}
        </div>
    )
}

export default Education