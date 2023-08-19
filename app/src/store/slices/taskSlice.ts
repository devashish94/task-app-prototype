import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type Task = {
  id: number,
  list_name: string,
  title: string,
  description: string,
  completed: boolean
}

interface State {
  loading: boolean,
  tasks: Task[] | null,
  error: boolean
}

const initialState: State = {
  loading: false,
  tasks: null, 
  error: false
}

export const fetchTaskList = createAsyncThunk('fetchTasksList', async function (list: string) {
  const url = `http://${window.location.host.replace(':5173', '')}:8000/api/list/${list}`
  const tasks = await axios(url)

  return tasks.data
})

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTaskList.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(fetchTaskList.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  },
})

export default taskSlice.reducer
