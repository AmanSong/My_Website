import "./Transcript.css"

const Transcript = () => {
    const content = (
        <div className="centered-div">

            <iframe
                src="MyCV/Academic_Transcripts.pdf"
                title="PDF Viewer"
                id="TS-Frame"
            ></iframe>

        </div>
    )

    return (
        <>
        hi
            {content}
        </>
    )
}

export default Transcript