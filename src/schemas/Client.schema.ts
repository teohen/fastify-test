
const clientSchema = {
	$id: 'clientDataSchema',
	type: 'object',
	required: ['name', 'number', 'birthDate'],
	properties: {
		name: { type: 'string' },
		number: { type: 'integer' },
		birthDate: { type: 'string' }
	}
}

export default clientSchema
