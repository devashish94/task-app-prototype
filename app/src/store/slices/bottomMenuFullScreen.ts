import { createSlice } from '@reduxjs/toolkit'

export const toggleFullscreenSlice = createSlice({
  name: 'toggleBottomMenuFullscreen',
  initialState: false as boolean,
  reducers: {
    toggleFullscreen: (state) => {
      return !state
    },
  }
})

export const { toggleFullscreen } = toggleFullscreenSlice.actions
export default toggleFullscreenSlice.reducer
