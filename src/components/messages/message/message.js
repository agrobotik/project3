import './message.css'

function Message(props) {
    return (
        <div className="message-container">
            <div className="message">
                <p className="message__name">{props.name}</p>
                <p className="message__content">{props.content}</p>
            </div>
        </div>
    )
}

export default Message;