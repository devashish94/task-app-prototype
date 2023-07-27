import {createSlice} from '@reduxjs/toolkit'

export const collapseSlice = createSlice({
    name: 'pinned',
    initialState: true,
    reducers: {
        collapse: (state) => {
            return !state
        }
    }
})

export const {collapse} = collapseSlice.actions
export default collapseSlice.reducer
