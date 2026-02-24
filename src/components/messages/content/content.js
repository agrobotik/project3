import './content.css'

function Content(props) {
    return (
        <>
            <p className="message__content">{props.content}</p>
        </>
    )
}

export default Content;