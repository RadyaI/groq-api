import Fastify from 'fastify'
import 'dotenv'
import chat from './routes/chatRoute'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true,
})

app.register(cors)

app.register(chat, { prefix: '/chat' })

app.get('/', async (req, reply) => {
  return reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>GROQ AI</title>
    <meta
      name="description"
      content="This is a starter template for Vercel + Fastify."
    />
  </head>
  <style>
  ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
}
  </style>
  <body>
    <h1>Groq API</h1>
    <p>Ini api yang dibuat menggunakan <a href="https://groq.com" target="_blank" >Groq API</a> yang dibuat ulang untuk memudahkan menggunakan api nya
    jadi tinggal langsung pake saja di frontend.
    </p>
    <p>
        Untuk api yang ini menggunakan model <code>llama3-8b-8192</code> ya gitu dah intinya ini udah tinggal dipake aja.
    </p>
    <h2>Gimana cara pakainya?</h2>
    <p>Buat endpointnya sendiri yaitu <code>groq-api.radya.fun/chat</code> methodnya <b>POST</b> dan untuk request body isinya ada ini:</p>
    </br>
    <pre>
      {
        msg: "",
        password: ""
      }
    </pre>
    </br>

    <ul>
      <li><b>msg</b>: Ini buat chat yang mau ditanya ke groq.</li>
      <li><b>password</b>: Ini ya password buat bisa pake api nya, passwordnya apa? rahasia dong hehe </li>
    </ul></br>
    <footer>
        <p style="text-align: center; font-size: small;">
            Made by <a href="https://radya.fun" target="_blank">Radya</a>
        </p>
    </footer>
      </body>
</html>
`
