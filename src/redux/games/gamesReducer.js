import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  game: ''
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    pickCsgo: (state) => {
      state.game = 'cs-go'
    },
    pickLol: (state) => {
      state.game = 'league-of-legends'
    },
    pickBrawlstars: (state) => {
      state.game = 'brawl-stars'
    },
  },
})

export const { pickCsgo, pickLol, pickBrawlstars } = gamesSlice.actions

export default gamesSlice.reducer