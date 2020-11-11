import { FastifyRequest, FastifyReply } from 'fastify';
import {ClienteService} from './../services/Cliente.service';

import { Client } from './../models/Client'

export default class ClientController  {

	private clientService = new ClienteService()

	async getClient():Promise<Array<Client>> {
		const clients = this.clientService.createFake(3)
		return clients
	}

	async createClient(req: FastifyRequest, res: FastifyReply): Promise<Client> {
		try {
			const client =  <Client>{
				name: req.body.name,
				email: req.body.email,
				number: req.body?.number,
				birthDate: req.body.birthDate
			}
			
			await this.clientService.create(client)
			return client
		}catch (err){
			console.log(err)
			return new Error('DEU RUIM')
		}
	}
}	