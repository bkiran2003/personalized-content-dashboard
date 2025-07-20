import { configureStore } from '@reduxjs/toolkit'
import preferencesReducer from '../features/preferences/preferencesSlice'
import feedReducer from '../features/feed/feedSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    feed: feedReducer,
    favorites: favoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
