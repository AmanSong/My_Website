import "./Main.css"

const Main = () => {

    const aboutMe = (
        <div className="About-Me-Section">
            <h1 style={{fontSize: 3 + 'em'}}>
                Hello and Welcome
            </h1>
            Thank you for taking the time to visit my website, Please take a look at everything this site has to offer
            <div className="about">
                <div style={{marginBottom: 3 + 'em'}}></div>
                <h2>What is this website about?</h2>
                <div style={{marginBottom: .5 + 'em'}}></div>
                This website will act as a portfolio for all the work and progress that I have accumulated throughout my journey, 
                It will contain various information about myself and any projects that I may have completed in the future for not only
                myself to look back and reflect on but to also showcase my skills to employers such as yourself.
                <div style={{marginBottom: .5 + 'em'}}></div>
                So wander around, have a look and maybe even learn a bit about me, then decide whether I am a good fit or not
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