import "./Main.css"

const Main = () => {

    const aboutMe = (
        <div className="About-Me-Section">
            <p style={{ fontSize: 3 + 'em' }}>
                Wen Ting Song
            </p>

            <div style={{ marginTop: 1 + 'em' }}>
                <p style={{ fontSize: 2 + 'em' }}>
                    Hello, I'm a computer science graduate from TUD
                </p>

                <div style={{ marginTop: 1 + 'em' }}>
                    <p>
                        Good morning, even or afternoon to whoever is reading this, My name is Wen Ting Song but many of my friends
                        call me Aman. So let me introduce myself a little, I am an aspiring Software Engineer that takes great interest
                        in all things internet and technology.
                    </p>
                </div>

                <div style={{ marginTop: 5 + 'em' }}>
                    <h4>Why computer science?</h4>

                    <p style={{ marginTop: 1 + 'em' }}>
                        So why did I pursue a career in computer science? Well my biggest inspiration is video games and I'm sure it was
                        the same for many other software developers, I enjoy video games such as Minecraft, Terraria, WOT and even Roblox.
                        Playing these games made me wonder, what is going on behind the scenes and that spark of curiosity stayed with me
                        even till this very day.
                    </p>

                    <p style={{ marginTop: 1.5 + 'em' }}>
                        But thats not all, Perhaps one of the biggest inspirations for me was when I was watching YouTube videos and I came
                        across several YouTubers such as "Michael Reeves" who used code to create wild and silly inventions which I found
                        hilarious but also fascinating at the same time.
                    </p>
                </div>

                <div style={{ marginTop: 3 + 'em' }}>
                    <h4>A little about myself</h4>

                    <p style={{ marginTop: 1 + 'em' }}>
                        What kind of person am I? That is a kind of question that I'm not even sure
                    </p>
                </div>
            </div>

        </div>
    )

    const content = (
        <div className="Main-Page">
            <div className="centered-div">
                {aboutMe}
            </div>
        </div>
    )

    return content
}

export default Main