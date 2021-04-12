import { createContext } from 'react';
import io from 'socket.io-client';

export const socket = io(
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://moviematch2.herokuapp.com/'
);

export const SocketContext = createContext(socket);

