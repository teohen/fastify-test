
const clientSchemaRef = {
	$id: 'clientDataSchema',
	type: 'object',
	required: ['name', 'number', 'birthDate'],
	properties: {
		id: {type: 'number'},
		name: { type: 'string' },
		number: { type: 'integer' },
		birthDate: { type: 'string' },
		email: {type:'string'}
	}
}

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
			},
			500: {
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

const getAllClientsSchema = {
	schema: {
		tags: ['client'],
		descriptions: 'Create a client on the database',
		type: 'array',
		items: { $ref: 'clientDataSchema#'}
	},
		response: {
			200: { $ref: 'clientDataSchema#' },
			400: {
				type: 'object',
				properties: {
					statusCode: { type: 'number' },
					error: { type: 'string' },
					message: { type: 'string' },
				}
			},
			500: {
				type: 'object',
				properties: {
					statusCode: { type: 'number' },
					error: { type: 'string' },
					message: { type: 'string' },
				}
			}
		}
	}

const getClient = {
	schema: {
		tags: ['client'],
		descriptions: 'get a client from the database',
		querystring: {
			type: 'object',
			required: ['id'],
			properties: {
				id: { type: 'number', description: 'enter the client id', example: 1254 }
			}
        },
		response: {
			200: { $ref: 'clientDataSchema#' },
			400: {
				type: 'object',
				properties: {
					statusCode: { type: 'number' },
					error: { type: 'string' },
					message: { type: 'string' },
				}
			},
			500: {
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

const clientSchema = {
	clientSchemRef: clientSchemaRef,
	getClient: getClient,
	createClientSchema: createClientSchema,
	getAllClientsSchema: getAllClientsSchema
}

export default clientSchema
