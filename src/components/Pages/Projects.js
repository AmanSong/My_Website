import "./Projects.css"

const Projects = () => {

    const FYP_Tech = (
        <div className="Technologies">
            <div className="TechBubble">ReactJS</div>
            <div className="TechBubble">HTML/CSS</div>
            <div className="TechBubble">JavaScript</div>
            <div className="TechBubble">Python</div>
            <div className="TechBubble">FastAPI</div>
            <div className="TechBubble">HuggingFace</div>
            <div className="TechBubble">OpenAI</div>
            <div className="TechBubble">LangChain</div>
            <div className="TechBubble">BootStrap</div>
            <div className="TechBubble">ReportLab</div>
            <div className="TechBubble">Supabase</div>
        </div>
    )

    const content = (
        <div className="centered-div">

            <div className="About-Me-Section">
                <p style={{ fontSize: 3 + 'em' }}>
                    My Projects
                </p>

                <div className="Secondary-Section" style={{ marginTop: 5 + 'rem' }}>
                    <p style={{ fontSize: 2 + 'rem' }}>
                        Final Year Project - AI Illustrator
                    </p>

                    <div style={{ marginTop: 1 + 'rem' }}>
                        <h4>Github source code</h4>
                        If you want to check out the projects code, here is the GitHub link
                        : <a target="_blank" rel="noreferrer" href="https://github.com/AmanSong/final-year-project">AI Illustrator</a>
                    </div>

                    <div className="Project-Description">
                        <h2>Project Description</h2>

                        <p style={{ marginTop: 2 + 'rem' }}>
                            <p>
                                Artificial Intelligence was all the rage back then and is still now,
                                so for my final year in computer science, my idea was to create
                                a web app that allowed users to illustrate novels or stories using AI image
                                generation.
                            </p>

                            <p style={{ marginTop: 1 + 'rem' }}>
                                "AI Illustrator", I know not a very creative name was a web app that accepted stories or novels
                                in PDF format and then re-creates the story along side AI generated images. Users can customize to
                                an extent the type of images to be produced, how the story will be formatted an other small
                                adjustments.
                            </p>

                            <p style={{ marginTop: 1 + 'rem' }}>
                                After I managed to get the prototype to work, I decided to add another feature which was to
                                allow users to create their very own story with illustrations all using AI. This was probably my
                                favorite feature out of all within my project due to the silliness one can achieve.
                            </p>

                            <div className="ScreenShots">
                                <img src="SH_LoginPage.png" alt="screenshot"></img>
                                <img src="SH_Page.png" alt="screenshot"></img>
                            </div>
                        </p>
                    </div>

                    <div className="Project-Description">
                        <h2>Technologies used</h2>


                        <p style={{ marginTop: 1.5 + 'rem' }}>
                            <h4>Front End</h4>
                            ReactJS was used to create and style the frontend of the application, using React I was able to provide users 
                            with clean and concise UI. The UI also features a ton of widgets and buttons which users can freely choose and select.
                            Much like this website, my FYP's UI consists of a navbar and a sidebar that can open and close. The navbar contains the logo
                            on the left and the users profile on the right. The sidebar houses all the different buttons and options for the user.
                        </p>

                        <p style={{ marginTop: 1.5 + 'rem' }}>
                            <h4>Back End</h4>
                            The back end is where all the magic happens, the front end is connected to the backend portion of my app with several APIs
                            using FastAPI, here all the processing such as text extraction, text cleaning, image generation and more takes place.
                        </p>

                        <div style={{ marginTop: 1 + 'rem' }}>
                            {FYP_Tech}
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )

    return (
        <div className="Projects-Page">
            {content}
        </div>
    )
}

export default Projects