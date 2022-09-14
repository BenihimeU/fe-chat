import { io } from 'socket.io-client';
const domainId = '127.0.0.1:4000';

const server = io(domainId);