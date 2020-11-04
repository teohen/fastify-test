import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import StatusController from './controllers/Status.controller'


export default async (fastify: FastifyInstance): Promise<void> => {

    const statusController = new StatusController()

	fastify.get('/status', async (req: FastifyRequest, res: FastifyReply) => {
		return statusController.getStatus()
	})
}
