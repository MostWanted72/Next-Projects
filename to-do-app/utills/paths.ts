export type Paths = {
  landingPage: string,
  auth: {
    login: string,
    logout: string,
  },
  drinks: {
    byId: (id : string) => string,
    all: string
  },
  client: string,
  tasks: string,
  prisma: string,
}

const paths: Paths = {
  landingPage: '/',
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  },
  drinks: {
    byId: (id) => `/drinks/${id}`,
    all: '/drinks',
  },
  client: '/client',
  tasks: '/tasks',
  prisma: '/prisma-example'
}

export default paths;