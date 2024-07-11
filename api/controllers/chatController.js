import { chatService } from "../service/chatService";

export async function chatConteroller(req, reply) {
    const message = req.body.msg
    const password = req.body.password

    if (password == process.env.PASSWORD) {
        const result = await chatService(message)
        reply.send(result)
    } else {
        reply.send({
            status: false,
            msg: 'Password salah!! coba tanya developernya 😉.'
        })
    }
}
