# Groq API

Ini api yang dibuat menggunakan [Groq API](https://groq.com) yang dibuat ulang untuk memudahkan menggunakan api nya jadi tinggal langsung pake saja di frontend.

Untuk api yang ini menggunakan model `llama3-8b-8192` ya gitu dah intinya ini udah tinggal dipake aja.

## Gimana cara pakainya?

Buat endpointnya sendiri yaitu `groq-api.radya.fun/chat` methodnya **POST** dan untuk request body isinya ada ini:

```json
{
  "msg": "",
  "password": ""
}
```
- **msg:** Ini buat chat yang mau ditanya ke groq.
- **password:** Ini ya password buat bisa pake api nya, passwordnya apa? rahasia dong hehe.

Made by [Radya](https://radya.fun)