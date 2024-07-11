import { chatConteroller } from "../controllers/chatController";

export default async function (fastify, opts) {
    fastify.post('/', chatConteroller)
}