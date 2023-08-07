import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type List = {
  task_list: string,
  name: string,
  pin: any
}

interface State {
  loading: boolean,
  lists: List[] | null,
  error: boolean
}

const initialState: State = {
  loading: false,
  lists: null as any,
  error: false
}

export const fetchAllList = createAsyncThunk('fetchAllList', async function () {
  const url = `http://localhost:8000/api/lists/all/`
  const lists = await axios(url)

  return lists.data
})

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllList.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllList.fulfilled, (state, action) => {
      state.loading = false
      state.lists = action.payload
    })
    builder.addCase(fetchAllList.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  },
})

export default listSlice.reducer
