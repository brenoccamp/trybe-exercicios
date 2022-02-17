const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
	const fullName = [firstName, middleName, lastName]
		.filter((name) => name).join(" ");
	
	return {
		id,
		firstName,
		middleName,
		lastName,
		fullName,
	}
};

const serialize = (authorData) => {
	return {
		id: authorData.id,
		firstNAme: authorData.first_name,
		middleName: authorData.middle_name,
		lastName: authorData.last_name
	}
};

const getAll = async () => {
	const query = 'SELECT id, first_name, middle_name, last_name FROM authors';
	const [authors] = await connection.execute(query);

	return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
	const query = 'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?';
	const [authorData] = await connection.execute(query, [id]);

	if (authorData.length === 0) return null;

	const { firstName, middleName, lastName } = authorData.map(serialize)[0];

	return getNewAuthor({ id, firstName, middleName, lastName });
}

module.exports = {
	getAll,
	findById,
};