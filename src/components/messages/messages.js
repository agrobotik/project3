import Message from "./message/message";
import Content from "./content/content";
import './messages.css';



function Messages({ messages }) {
    return (
        <div className="messages-container">
            <div className="messages">
                {messages.users.map((e, index) => <Message name={e.name} id={index} key={index} />)}
            </div>

            <div className="messages__content">
                {messages.users.map((e, index) => <Content content={e.content[e.content.length - 1]} key={index} />)}
            </div>

            <input type="text" placeholder="Enter your message" className="messages__input" />
            <button className="messages__send">Send</button>
        </div>
    )
}

export default Messages;