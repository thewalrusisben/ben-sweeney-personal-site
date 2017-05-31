const env = process.env.NODE_ENV || 'development'

const Config = {
  production: {apiUrl: 'http://api.bensweeney.me'},
  development: {apiUrl: 'http://localhost:8081'}
}

export default Config[env].apiUrl
