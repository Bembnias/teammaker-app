import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/gamesReducer'
import authReducer from './auth/authReducer'

export const store = configureStore({
  reducer: {
    gamesReducer,
    authReducer
  },
})