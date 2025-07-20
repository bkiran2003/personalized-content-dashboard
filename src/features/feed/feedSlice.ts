import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchContent } from '../../services/fetchContent'

export interface ContentItem {
  id: string
  type: 'news' | 'recommendation' | 'social'
  title: string
  description: string
  image: string
  link: string
  source: string
  category?: string
}

interface FeedState {
  items: ContentItem[]
  loading: boolean
  error: string | null
}

const initialState: FeedState = {
  items: [],
  loading: false,
  error: null
}

export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  async (categories: string[]): Promise<ContentItem[]> => {
    return await fetchContent(categories)
  }
)

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ContentItem[]>) {
      state.items = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFeed.pending, state => { state.loading = true; state.error = null })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Could not load content.'
      })
  }
})

export const { setItems } = feedSlice.actions
export default feedSlice.reducer
