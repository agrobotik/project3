import { useParams } from 'react-router-dom';

function Direct_messages({ messages }) {
    const id = useParams().id;

    return (
        <>
            {messages.users[id].content.map((e, index) => <p key={index}>{e}</p>)}
        </>
    )
}

export default Direct_messages;