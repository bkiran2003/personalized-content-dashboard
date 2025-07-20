import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PreferencesState {
  categories: string[]
  darkMode: boolean
}

const initialState: PreferencesState = {
  categories: [],
  darkMode: false,
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload
      if (typeof window !== "undefined") {
        localStorage.setItem('preferences', JSON.stringify(state))
      }
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
      if (typeof window !== "undefined") {
        localStorage.setItem('preferences', JSON.stringify(state))
        document.documentElement.classList.toggle('dark', state.darkMode)
      }
    },
    loadPreferences(state) {
      if (typeof window !== "undefined") {
        const data = localStorage.getItem('preferences')
        if (data) {
          const stored = JSON.parse(data)
          state.categories = stored.categories || []
          state.darkMode = !!stored.darkMode
        }
      }
      document.documentElement.classList.toggle('dark', state.darkMode)
    }
  }
})

export const { setCategories, toggleDarkMode, loadPreferences } = preferencesSlice.actions
export default preferencesSlice.reducer
