import axios from 'axios'

const url = "http://localhost:5000"

// @ENDPOINT: /register
// @DESCRIPTION: Create new user
export const registerUser = (credentials) => axios.post(`${url}/register`, JSON.stringify(credentials), {
  headers: { 'Content-Type': 'application/json' }
})

// @ENDPOINT: /login
// @DESCRIPTION: Login to user's account
export const loginUser = (credentials) => axios.post(`${url}/login`, JSON.stringify(credentials), {
  headers: { 'Content-Type': 'application/json' }
})