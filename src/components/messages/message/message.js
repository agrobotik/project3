import './message.css'
import { NavLink } from "react-router-dom";

function Message({ id, name }) {
    return (
        <div className="message-container">
            <div className="message">
                <div className='message__user'>
                    <NavLink className="message__name" to={`/messages/direct/${id}`}>{name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Message;