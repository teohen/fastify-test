import { Client } from './../models/Client';

export class ClienteService {
    createFake(length: number): Client[] {
        const clients = Array<Client>()

        for (let i = 0; i < length; i++)
            clients.push(new Client("Teo", new Date(), "@teohen")) 

        return clients
    }
    create(client: Client){
        return client
    }
}