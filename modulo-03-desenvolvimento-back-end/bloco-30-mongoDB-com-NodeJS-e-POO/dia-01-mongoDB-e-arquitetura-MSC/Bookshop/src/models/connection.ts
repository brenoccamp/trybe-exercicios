// models/connection.ts

import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/model_example') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;