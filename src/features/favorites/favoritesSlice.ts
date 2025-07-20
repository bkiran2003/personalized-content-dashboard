import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContentItem } from '../feed/feedSlice'

const getInitial = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('favorites')
    if (data) return JSON.parse(data)
  }
  return []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getInitial() as ContentItem[],
  reducers: {
    toggleFavorite(state, action: PayloadAction<ContentItem>) {
      const exists = state.find((item) => item.id === action.payload.id)
      let newState
      if (exists) {
        newState = state.filter((item) => item.id !== action.payload.id)
      } else {
        newState = [...state, action.payload]
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(newState))
      }
      return newState
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
