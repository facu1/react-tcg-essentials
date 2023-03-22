let authenticated = false

const login = (cb) => {
  authenticated = true
  cb()
}

const logout = (cb) => {
  authenticated = false
  cb()
}

const isAuthenticated = () => authenticated

export const auth = { login, logout, isAuthenticated }
