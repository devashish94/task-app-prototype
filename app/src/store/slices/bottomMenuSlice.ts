import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false as boolean,
  fullscreen: false as boolean
}

export const bottomMenuSlice = createSlice({
  name: 'toggleAddNewTaskDialog',
  initialState,
  reducers: {
    toggleBottomMenu: state => {
      state.toggle = !state.toggle
    },
    toggleFullScreen: state => {
      state.fullscreen = !state.fullscreen
    }
  }
})

export const { toggleBottomMenu, toggleFullScreen } = bottomMenuSlice.actions
export default bottomMenuSlice.reducer
