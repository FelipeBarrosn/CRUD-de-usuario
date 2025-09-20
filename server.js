import { fastify } from 'fastify'
import{ DatabaseMemory } from './database-memory.js'
import { request } from 'node:http'

const server = fastify()

const database = new DatabaseMemory()

server.post('/usuario', (request, reply) => {
    const {name, email, cpf} = request.body

    database.create({
        name,
        email,
        cpf,
    })

    return reply.status(201).send()
})

server.get('/usuario', () => {
    const usuario = database.list()

    return usuario
})

server.put('/usuario/:id', (request, reply) => {
    const usuarioId = request.params.id
    const {name, email, cpf} = request.body 

    database.update(usuarioId, {
        name,
        email,
        cpf,
    })

    return reply.status(204).send()
})

server.delete('/usuario/:id', (request, reply) => {
    const usuarioId = request.params.id

    database.delete(usuarioId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
