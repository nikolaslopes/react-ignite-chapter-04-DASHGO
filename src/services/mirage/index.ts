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
      this.namespace = 'api' // * Sets the namespace to use the routes
      this.timing = 750

      this.get('/users')
      this.post('/users')

      this.namespace = '' // * Reset namespace to don't cause trouble with Next API routes
      this.passthrough() // * All API calls to '/api' address will be passed through Mirage, but if the call would not a mirage route, it will be passed on from your original route
    },
  })

  return server
}
