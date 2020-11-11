const createClientSchema = {
	schema: {
		tags: ['client'],
		descriptions: 'Create a client on the database',
		body: {
            type: 'object',
            required: ['name', 'number', 'birthDate'],
            properties: {
              name: { type: 'string' },
              number: { type: 'number' },
              email: { type: 'string' },
              birthDate: {type: 'string'}
          }
        },
		response: {
			201: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
                        name: { type: 'string' },
                        number: { type: 'number' },
                        email: { type: 'string' },
                        birthDate: {type: 'string'}
					}
				}
			},
			400: {
				type: 'object',
				properties: {
					statusCode: { type: 'number' },
					error: { type: 'string' },
					message: { type: 'string' },
				}
			}
		}
	}
}
export default createClientSchema
