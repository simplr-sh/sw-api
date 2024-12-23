import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.redirect('https://github.com/simplr-sh/sw-api', 302)
})

export default app
