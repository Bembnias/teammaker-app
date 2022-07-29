import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
  token: null
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      state.userInfo = action.payload.user
      state.token = action.payload.accessToken
    },
  },
})

export const { setAuthInfo } = authSlice.actions

export default authSlice.reducer