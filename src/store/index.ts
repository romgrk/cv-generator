import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import cvReducer from './cv'

export const store = configureStore({
  reducer: {
    cv: cvReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
