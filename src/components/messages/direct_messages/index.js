import { useParams } from 'react-router-dom';
import React from 'react';


let message_input = React.createRef();

function Direct_messages({ messages }) {
    const id = useParams().id;

    const get_message = () => {

    }

    return (
        <>
            {messages.users[id].content.map((e, index) => <p key={index}>{e}</p>)}
            <input type='text' ref={message_input} />
            <button onClick={get_message}>send message</button>
        </>
    )
}

export default Direct_messages;