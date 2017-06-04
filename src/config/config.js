const env = process.env.NODE_ENV || 'development'

const Config = {
  production: {apiUrl: 'http://ben-sweeney-api.herokuapp.com'},
  development: {apiUrl: 'http://localhost:8081'}
}

export default Config[env].apiUrl
