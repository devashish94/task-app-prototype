import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type Typer = {
  task_list: string,
  title: string,
  description: string,
  completed: boolean
}

// const result: Typer[] = [] 

const initialState = {
  loading: false,
  // tasks: result,
  tasks: null as any,
  error: false
}

export const fetchAllList = createAsyncThunk('fetchAllList', async function () {
  const url = `http://localhost:8000/api/lists/all/`
  const tasks = await axios(url)

  return tasks.data
})

export const fetchTaskList = createAsyncThunk('fetchTasksList', async function (list: string) {
  const url = `http://${window.location.host.replace(':5173', '')}:8000/api/list/${list}`
  const tasks = await axios(url) 

  return tasks.data
})

export const taskSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    nullTheArray: function (state) {
      state.tasks = null 
    }
  },
  extraReducers: builder => {
    // All Lists
    builder.addCase(fetchAllList.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchAllList.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(fetchAllList.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })

    // Any List Tasks
    builder.addCase(fetchTaskList.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(fetchTaskList.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  },
})

export default taskSlice.reducer
export const {nullTheArray} = taskSlice.actions
