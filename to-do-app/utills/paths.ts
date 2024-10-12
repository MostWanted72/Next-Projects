export type Paths = {
  landingPage: string,
  auth: {
    login: string,
    logout: string,
  }
}

const paths: Paths = {
  landingPage: '/',
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  }
}

export default paths;