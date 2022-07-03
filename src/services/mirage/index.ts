import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<IUser>>({}),
    },

    factories: {
      user: Factory.extend({
        name(index: number) {
          return `Deep Fake ${index + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10)
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
