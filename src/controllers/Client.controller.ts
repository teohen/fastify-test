import {ClienteService} from './../services/Cliente.service';
import { Client } from './../models/Client';

export default class StatusController  {

	private clientService = new ClienteService()

	async getClient():Promise<Array<Client>> {
		const clients = this.clientService.createFake(3)
		return clients
	}

	async createClient(client: Client): Promise<Client> {
		return this.clientService.create(client)
	}
}	