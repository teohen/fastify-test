import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import StatusController from './controllers/Status.controller'
import ClientController from './controllers/Client.controller'


export default async (fastify: FastifyInstance): Promise<void> => {

	const statusController = new StatusController()
	const clientController = new ClientController()

	fastify.get('/status', async (req: FastifyRequest, res: FastifyReply) => {
		return statusController.getStatus()
	})

	fastify.get('/client', async (req: FastifyRequest, res: FastifyReply) => {
		return  await clientController.getClient()
	})

	fastify.post('/client', async (req: FastifyRequest, res: FastifyReply) => {
		return  await clientController.createClient(req.body)
	})
}
