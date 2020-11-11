import { Model } from 'sequelize/types';
import ClientModel, { Client } from './../models/Client';

export class ClienteService {
    async create(client: Client): Promise<Model> {
        const newClient = ClientModel.build({
            name: client.name,
            email: client.email,
            number: client.number,
            birthDate: client.birthDate
        })
        await newClient.save()
        return newClient
    }
    async index(): Promise<Client[]>{
        const clients = await ClientModel.findAll()
        
        return clients.map((client) => {
            return  <Client>{
                id: client.getDataValue('id'),
                name: client.getDataValue('name'),
                number: client.getDataValue('number'),
                email: client.getDataValue('email'),
                birthDate: client.getDataValue('birthDate')
            }
        })
    }
    
}