import { ServerResponse, IncomingMessage, Server } from 'http';
import fastify, {FastifyInstance} from 'fastify'

import routes from './routes'

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

server.register(require("fastify-blipp"));
server.register(routes)

const start = async () =>{
    try {
        await server.listen(3000, "localhost");
        console.log('teste')
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