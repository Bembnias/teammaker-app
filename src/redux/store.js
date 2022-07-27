import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/gamesReducer'

export const store = configureStore({
  reducer: {
    gamesReducer
  },
})