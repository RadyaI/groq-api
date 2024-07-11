import { chatService } from "../service/chatService";

export async function chatConteroller(req, reply) {
    const message = req.body.msg
    const result = await chatService(message)
    reply.send(result)
}
