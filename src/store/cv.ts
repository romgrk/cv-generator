import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mergeDeepRight } from 'rambda'
import { CV } from '../types'
import data from '../assets/self-data'

const initialState = {
  data: data,
}

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    update: (state, action: PayloadAction<Partial<CV>>) => {
      state.data = mergeDeepRight(state.data, action.payload)
    },
  },
})

export const actions = cvSlice.actions

export default cvSlice.reducer
