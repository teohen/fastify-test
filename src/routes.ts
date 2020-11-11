import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import StatusController from './controllers/Status.controller'
import ClientController from './controllers/Client.controller'

import clientSchema from './schemas/Client.schema'

export default async (fastify: FastifyInstance): Promise<void> => {

	const statusController = new StatusController()
	const clientController = new ClientController()

	fastify.get('/status', async (req: FastifyRequest, res: FastifyReply) => {
		return statusController.getStatus()
	})

	fastify.get('/client', clientSchema.getAllClientsSchema, async () => {
		return  await clientController.index()
	})

	fastify.post('/client', clientSchema.createClientSchema,async (req: FastifyRequest) => {
		return  await clientController.createClient(req)	
	})

	fastify.get('/client/:id', clientSchema.getClient, async(req: FastifyRequest) => {
		return await clientController.getClient(req)
	})
}
