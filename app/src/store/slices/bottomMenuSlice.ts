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
  toggle: boolean,
  fullscreen: boolean,
  task: Task | null,
  loading: boolean,
  error: boolean
}

const initialState: State = {
  toggle: false,
  fullscreen: false,
  task: null,
  loading: false,
  error: false  
}

// export const fetchTaskDetail = createAsyncThunk('fetchTaskDetail', async (list, id) => {
export const fetchTaskDetail = createAsyncThunk('fetchTaskDetail', async () => {
  // const url = `http://localhost:8000/api/list/${list}/${id}`
  const url = `http://localhost:8000/api/list/today/3`
  const tasks = await axios(url)

  console.log(tasks.data[0])

  return tasks.data[0]
})

export const bottomMenuSlice = createSlice({
  name: 'toggleAddNewTaskDialog',
  initialState,
  reducers: {
    toggleBottomMenu: state => {
      state.toggle = !state.toggle
    },
    toggleFullScreen: state => {
      state.fullscreen = !state.fullscreen
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTaskDetail.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTaskDetail.fulfilled, (state, action) => {
      state.loading = false
      state.task = action.payload
    })
    builder.addCase(fetchTaskDetail.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  },
})

export const { toggleBottomMenu, toggleFullScreen } = bottomMenuSlice.actions
export default bottomMenuSlice.reducer
