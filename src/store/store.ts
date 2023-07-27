import {configureStore} from '@reduxjs/toolkit';
import pinCollapseSlice from './slices/pinnedCollapseSlice'
import navbarToggleSlice from './slices/navbarToggleSlice';

export const store = configureStore({
    reducer: {
        pinnedCollapse: pinCollapseSlice,
        toggleNav: navbarToggleSlice 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store