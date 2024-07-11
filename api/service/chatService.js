import { Groq } from 'groq-sdk'

const groq = new Groq({
    apiKey: process.env.GROQ_KEY
})
export async function chatService(content) {
    const reply = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content
        }],
        model: "llama3-8b-8192"
    })

    return reply.choices[0].message.content
}