import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

console.log('aqui..');
app.use(cors());
app.use(routes);
console.log('aqui...');

console.log('aqui!');

app.listen(3333, () => console.log('Server in porte 3333...'));