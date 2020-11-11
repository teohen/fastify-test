import { ServerResponse, IncomingMessage, Server } from 'http';
import fastify, {FastifyInstance} from 'fastify'
const fsequelize =  require('fastify-sequelize')

import routes from './routes'
import clientSchema from '../src/schemas/Client.schema';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

server.register(require("fastify-blipp"));
server.register(routes)
server.register(fsequelize, {
  instance: 'sequelize',
  autoConnect: true,
  dialect: 'sqlite',
  storage: './src/database/db.sqlite'
}).ready() 
server.addSchema(clientSchema.clientSchemRef)


const start = async () =>{
    try {
        await server.listen(3000, "localhost");
        server.blipp();
    } catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};

process.on("uncaughtException", error => {
    console.error(error);
  });
process.on("unhandledRejection", error => {
  console.error(error);
});
  
start();