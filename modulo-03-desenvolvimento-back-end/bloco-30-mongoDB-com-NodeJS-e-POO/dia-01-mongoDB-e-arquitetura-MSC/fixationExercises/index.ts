import { connect } from 'mongoose';

connect('mongodb://localhost:27017/meu_data_base');


// Agora veja como ficaria uma configuração completa:
const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password', // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);