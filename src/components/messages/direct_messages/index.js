import { useParams } from 'react-router-dom';
import React from 'react';
import './direct_messages.css';

let message_input = React.createRef();

function Direct_messages({ messages, add_message, on_message_change }) {
    const id = useParams().id;

    const get_message = () => {
        // add_direct_message(message_input.current.value)
    }

    let on_change = () => {
        on_message_change(message_input.current.value);
    }

    return (
        <div className='direct-messages__container'>
            <div className='direct-messages__messages'>
                {messages.users[id].content.map((e, index) => <p key={index}>{e}</p>)}
            </div>
            <div className='direct-messages__utils'>
                <input type='text' ref={message_input} value={messages.new_message_text} className='direct-messages__input' placeholder='Enter your message' onChange={on_change} />
                <button onClick={get_message} className='direct-messages__send'>send message</button></div>
        </div>
    )
}
export default Direct_messages;