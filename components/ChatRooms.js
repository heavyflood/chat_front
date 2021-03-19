import React from 'react';
import axios from 'axios';


const ChatRooms = ({rooms}) => (
    <ul className="list-group">
        {this.props.data.map((room) => (
            <li className="list-group-item" key={room.roomId}>
            <Link href="/d">
                <a>{room.name}</a>
            </Link>
            </li>
        ))}
    </ul>
);

ChatRooms.getInitialProps = async () => {
    const {data: rooms } = await axios.get('http://localhost:8081/chat/rooms');
    console.log(rooms);

    return { rooms };
}


export default ChatRooms;