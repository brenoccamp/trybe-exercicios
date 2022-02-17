const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
	const fullName = [firstNAme, middleName, lastName]
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
	const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

	return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
	getAll,
};