import "./Main.css"
import ImageModal from "./ImageModal"
import { useState } from "react";

const Main = () => {

    const [selectedImage, setSelectedImage] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const clickedImage = (image) => {
        setSelectedImage(image)
        setShowModal(true)
    }

    const modal = (
        <ImageModal show={showModal} onClose={() => setShowModal(false)} image={selectedImage} />
    )

    const aboutMe = (
        <div className="About-Me-Section">
            <p style={{ fontSize: 3 + 'em' }}>
                Wen Ting Song
            </p>

            <div style={{ marginTop: 1 + 'em' }}>
                <p style={{ fontSize: 2 + 'em' }}>
                    Hello, I'm a computer science graduate from TUD 👋
                </p>

                <div style={{ marginTop: 1 + 'em' }}>
                    <p>
                        Good morning, evening or afternoon to whoever is reading this, My name is Wen Ting Song but many of my friends
                        call me Aman. So let me introduce myself a little, I am an aspiring Software Engineer that takes great interest
                        in all things internet and technology.
                    </p>
                </div>

                <div className="Section" style={{ marginTop: 3 + 'em' }}>
                    <div className="Section-Left">
                        <h3>A little about myself</h3>

                        <p style={{ marginTop: 1 + 'em' }}>
                            What kind of person am I? Many people say that I'm a reserved and quiet individual and that is mostly true at times
                            but that doesn't mean I dislike social interaction, I've always enjoyed working with other people on team projects in college,
                            attending social gatherings and just simply hanging out with my friends.
                        </p>
                        <p style={{ marginTop: 1 + 'em' }}>
                            I believe myself to be a calm and composed individual, always logical and analytical in my way of thinking. I try to
                            always remain level-headed during stressful times such as trying to meet upcoming deadlines, fixing an aggravating problem or
                            other personal matters.
                            However I know very well myself that trying to contain and hide your stress is not a good thing for one's health and I'm
                            and I'm guilty of doing just that, putting up a front and to not worry others.
                        </p>
                        <p style={{ marginTop: 1 + 'em' }}>
                            There are days where I feel introverted while on others I feel more outgoing and extroverted, but after an event or a night out,
                            my social battery needs to be recharged for a few days at home relaxing and sipping on a good ol cup of tea.
                        </p>
                    </div>

                    <div className="Images">
                        <img id="MyPicture" src={process.env.PUBLIC_URL + "/Images/Myself.jpg"} alt="Me"></img>
                    </div>
                </div>

                <div className="Section" style={{ marginTop: 3 + 'em' }}>
                    <div className="Section-Right">
                        <h3>What are my hobbies?</h3>

                        <p style={{ marginTop: 1 + 'em' }}>
                            Whenever I have some free time, I enjoy playing some video games such as Terraria or Minecraft with or without mods,
                            I also enjoy watching some "Anime", my recent favourites including "Dandadan", "Frieren" and "Re:Zero".
                        </p>
                        <p style={{ marginTop: 1 + 'em' }}>
                            On rare occasions, me and my friends plan and go on trips together, this year we went to Praha in Czech Republic. We had a blast
                            but some of them got way too blasted during the night which will always be our core memories together.
                        </p>

                        <div className="Praha">
                            <img className="PrahaImages" onClick={() => clickedImage(process.env.PUBLIC_URL + "/Images/Praha1.jpg")} src={process.env.PUBLIC_URL + "/Images/Praha1.jpg"} alt="Praha1"></img>
                            <img className="PrahaImages" onClick={() => clickedImage(process.env.PUBLIC_URL + "/Images/Praha2.jpg")} src={process.env.PUBLIC_URL + "/Images/Praha2.jpg"} alt="Praha2"></img>
                            <img className="PrahaImages" onClick={() => clickedImage(process.env.PUBLIC_URL + "/Images/Praha3.jpg")} src={process.env.PUBLIC_URL + "/Images/Praha3.jpg"} alt="Praha3"></img>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

    const content = (
        <div className="Main-Page">
            <div className="centered-div">
                {aboutMe}
                {modal}
            </div>
        </div>
    )

    return content
}

export default Main