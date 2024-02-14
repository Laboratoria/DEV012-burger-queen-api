const { MongoClient } = require('mongodb');
const config = require('./config');

// eslint-disable-next-line no-unused-vars
const { dbUrl } = config;

const client = new MongoClient(dbUrl);

async function connect() {
  try {
    // Conectar al cliente de MongoDB
    await client.connect();
    console.log('Conectado a MongoDB');

    const db = client.db('burger_queen');
    console.log('Conexión verificada');
    return db;
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

module.exports = { connect };
