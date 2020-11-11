import { FastifyRequest, FastifyReply } from 'fastify';
import {ClienteService} from './../services/Cliente.service';

import { Client } from './../models/Client'

export default class ClientController  {

	private clientService = new ClienteService()

	async index():Promise<Client[]> {
		return await this.clientService.index()
	}

	async createClient(req: FastifyRequest): Promise<Client | Error>  {
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
			return new Error('An error occured while trying to create a new Client')
		}
	}
}	