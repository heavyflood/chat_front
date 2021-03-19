import React, { Component } from 'react';
import axios from 'axios';

const ChatRooms = () => {
    return class extends Component {
        state = {
            data: null
        }

        async initialize() {
            try {
              const response = await axios.get('http://localhost:8081/chat/rooms');
              this.setState({
                data: response.data
              });
            } catch (e) {
              console.log(e);
            }
          }

        componentDidMount(){
            this.initialize();
        }

        render(){
            const { rooms } = this.state;
            <ul className="list-group">
                {rooms.map((room) => (
                    <li className="list-group-item" key={room.roomId}>
                    <Link href="/d">
                        <a>{room.name}</a>
                    </Link>
                    </li>
                ))}
            </ul>
        }
    }
}

export default ChatRooms;