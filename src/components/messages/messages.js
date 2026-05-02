import Message from "./message/message";
import Content from "./content/content";
import React from "react";
import './messages.css';

let messages_input = React.createRef();

function Messages({ messages, add_message }) {
    let get_message = () => {
        add_message(messages_input.current.value);
        messages_input.current.value = "";
    }
    return (
        <div className="messages-container">
            <div className="messages">
                {messages.users.map((e, index) => <Message name={e.name} id={index} key={index} />)}
            </div>

            <div className="messages__content">
                {messages.users.map((e, index) => <Content content={e.content[e.content.length - 1]} key={index} />)}
            </div>

            <input type="text" placeholder="Enter your message" className="messages__input" ref={messages_input} onChange={() => {
                messages.new_post_text = messages_input.current.value;
                console.log(messages_input.current.value);
            }} />
            <button className="messages__send" onClick={get_message}>Send</button>
        </div>
    )
}

export default Messages;