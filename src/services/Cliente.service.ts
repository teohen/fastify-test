import { Model } from 'sequelize/types';
import ClientModel,   { Client, modelToInterface } from './../models/Client';

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
            return  modelToInterface(client)
        })
    }

    async get(id: number): Promise<Client> {
        const client = await ClientModel.findOne({where: {
            id: id
        }})
        return modelToInterface(client)
    }
    
}