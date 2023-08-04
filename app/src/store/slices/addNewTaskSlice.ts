import { createSlice } from '@reduxjs/toolkit'

export const addBottomMenuSlice = createSlice({
  name: 'toggleAddNewTaskDialog',
  // initialState: false as boolean, 
  initialState: {
    toggle: false,
    fullscreen: false 
  },
  reducers: {
    toggleBottomMenu: state => {
      state.toggle = !state.toggle
    },
    toggleFullScreen: state => {
      state.fullscreen = !state.fullscreen
    }
  }
})

export const { toggleBottomMenu, toggleFullScreen } = addBottomMenuSlice.actions
export default addBottomMenuSlice.reducer
