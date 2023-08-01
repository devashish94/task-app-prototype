import { createSlice } from '@reduxjs/toolkit'

export const addBottomMenuSlice = createSlice({
  name: 'toggleAddNewTaskDialog',
  initialState: false as boolean, 
  reducers: {
    toggleBottomMenu: (state) => {
      return !state
    },
  }
})

export const { toggleBottomMenu } = addBottomMenuSlice.actions
export default addBottomMenuSlice.reducer
