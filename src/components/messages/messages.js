import Message from "./message/message";
import './messages.css'

function Messages() {
    return (
        <div className="messages-container">
            <div className="messages">
                <Message name="Иван Иванов" content="Привет" />
                <Message name="Илон Маск" content="Го на Марс" />
                <Message name="Билл Гейтс" content="Где мой чип?" />
            </div>
            <input type="text" placeholder="Enter your message" className="messages__input" />
            <button className="messages__send">Send</button>
        </div>
    )
}

export default Messages;