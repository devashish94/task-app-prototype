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

export const fetchTasks = createAsyncThunk('fetchTasks', async function () {

  const url = `http://${'localhost'}:8000/api/list/today/`
  // console.log(url)

  // const url = 'https://jsonplaceholder.typicode.com/todos'
  // const url = 'https://dummyjson.com/posts'
  // const response = await fetch(url)
  // const tasks = await response.json()
  // console.log(tasks)
  // return tasks.posts

  const tasks = await axios(url)

  return tasks.data
})

export const fetchTaskList = createAsyncThunk('fetchTasksList', async function (list: string) {
  // const url = `http://localhost:8000/api/list/${list}`
  
  const url = `http://${window.location.host.replace(':5173', '')}:8000/api/list/${list}`
  // console.log(url)

  // const response = await fetch(url)
  // const tasks = await response.json()
   
  const tasks = await axios(url) 

  // console.log(url, tasks)
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
    // Today Tasks
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
