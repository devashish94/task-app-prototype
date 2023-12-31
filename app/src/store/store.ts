import { configureStore } from '@reduxjs/toolkit';
import pinCollapseSlice from './slices/pinnedCollapseSlice'
import sidebarToggleSlice from './slices/navbarToggleSlice';
import tasksFromListSlice from './slices/taskSlice';
import addBottomMenuSlice from './slices/bottomMenuSlice';
import listSlice from './slices/listSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksFromListSlice,
        lists: listSlice,
        pinnedCollapse: pinCollapseSlice,
        toggleSidebar: sidebarToggleSlice,
        bottomMenu: addBottomMenuSlice,
        // toggleBottomFullscreen: toggleFullscreen
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
