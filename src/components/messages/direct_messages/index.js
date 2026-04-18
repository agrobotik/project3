import { useParams } from 'react-router-dom';
import React from 'react';
import './direct_messages.css';
import { store } from '../../../data/data';

let message_input = React.createRef();

function Direct_messages({ messages }) {
    const id = useParams().id;

    const get_message = () => {

    }

    return (
        <div className='direct-messages__container'>
            <div className='direct-messages__messages'>
                {messages.users[id].content.map((e, index) => <p key={index}>{e}</p>)}
            </div>
            <div className='direct-messages__utils'>
                <input type='text' ref={message_input} value={messages.new_message_text} className='direct-messages__input' placeholder='Enter your message' onChange={() => {
                    messages.new_message_text = message_input.current.value;
                    // subscribe(DATA);
                }} />
                <button onClick={get_message} className='direct-messages__send'>send message</button></div>
        </div>
    )
}
store.re_render_tree(store.get_data());
export default Direct_messages;