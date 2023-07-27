import {createSlice} from '@reduxjs/toolkit'

export const navbarToggleSlice = createSlice({
    name: 'toggleNav',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return !state
        }
    }
})

export const {toggle} = navbarToggleSlice.actions
export default navbarToggleSlice.reducer
