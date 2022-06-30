import { createServer, Model } from 'miragejs'

interface IUser {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<IUser>>({}),
    },

    routes() {
      this.get('/users')
      this.post('/users')
    },
  })

  return server
}
