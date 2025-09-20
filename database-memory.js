import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #usuarios = new Map()

    list(){
       return Array.from(this.#usuarios.entries()).map((usuarioArry) => {
        const id = usuarioArry[0]
        const data = usuarioArry[1]

        return {
            id,
            ...data,
        }
       })
    }

    create(usuario) {
        const usuarioId = randomUUID()

        this.#usuarios.set(usuarioId, usuario)
    }

    update(id, usuario) {
        this.#usuarios.set(id, usuario)
    }

    delete(id) {
        this.#usuarios.delete(id)
    }
}