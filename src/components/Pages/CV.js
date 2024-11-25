import "./CV.css"

const CV = () => {
    const content = (
        <div className="centered-div">

            <iframe
                src="MyCV/WenTingSong_Resume.pdf"
                title="PDF Viewer"
                id="CV-Frame"
            ></iframe>

        </div>
    )

    return (
        <>
            {content}
        </>
    )
}

export default CV