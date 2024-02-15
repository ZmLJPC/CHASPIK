import fastify from 'fastify'
import cors from '@fastify/cors';
require('dotenv').config();

export const server = fastify()
server.register(cors);

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

async function main() {
    try{
        await server.listen({ host: process.env.HOST, port: Number(process.env.PORT) }, (err, address: any)=>{
            console.log(`Server ready at ${address}`)
        }); 
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

main()