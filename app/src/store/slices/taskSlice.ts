import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type Typer = {
  task_list: string,
  title: string,
  description: string,
  completed: boolean
}

const result: Typer[] = []

const initialState = {
  loading: false,
  tasks: result,
  error: false
}

export const fetchTasks = createAsyncThunk('fetchTasks', async function () {
  const url = 'http://192.168.0.140:3798/api/list/today/'
    // const url = 'https://jsonplaceholder.typicode.com/todos'
  // const url = 'https://dummyjson.com/posts'
  const response = await fetch(url)
  const tasks = await response.json()
  // console.log(tasks)
  // return tasks.posts
  return tasks
})

export const fetchTaskFromList = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  },
})

export default fetchTaskFromList.reducer
