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

// Action creators are generated for each case reducer function
export const { pickCsgo, pickLol, pickBrawlstars } = gamesSlice.actions

export default gamesSlice.reducer