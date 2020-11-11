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
        console.log('saved')
        return newClient
    }
}