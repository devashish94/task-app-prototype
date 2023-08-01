import {createSlice} from '@reduxjs/toolkit'

export const sidebarToggleSlice = createSlice({
    name: 'toggleSidebar',
    initialState: false,
    reducers: {
        toggleSidebar: (state) => {
            return !state
        }
    }
})

export const {toggleSidebar} = sidebarToggleSlice.actions
export default sidebarToggleSlice.reducer
