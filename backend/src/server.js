// server.js
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const formbody = require('@fastify/formbody');
const knexLib = require('knex');

// Confi BD con Knex
const knex = knexLib({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'web2025',
  },
});

// Fastify
fastify.register(cors, { origin: '*' });
fastify.register(formbody);

// Ruta raíz 
fastify.get('/', async () => {
  return { message: 'Backend Fastify corriendo!' };
});

// Ruta POST para recibir formulario
fastify.post('/api/form', async (request, reply) => {
  const { name, email, message } = request.body;

  // Validaciones 
  if (!name || !email || !message) {
    return reply.status(400).send({ error: 'Todos los campos son obligatorios' });
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return reply.status(400).send({ error: 'Email no es válido' });
  }

  // Guardar en la BD
  try {
    await knex('submissions').insert({ name, email, message });
    return reply.send({ success: true, message: 'Datos guardados correctamente' });
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ error: 'Error al guardar los datos' });
  }
});

// Ruta GET para ver registros
fastify.get('/api/submissions', async (request, reply) => {
  try {
    const data = await knex('submissions').select('*').orderBy('created_at', 'desc');
    return data;
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ error: 'Error al obtener los datos' });
  }
});

// Arrancar el servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Servidor corriendo en http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
