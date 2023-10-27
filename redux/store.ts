import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { exampleApi } from './services/exampleApi';
import bookingSlice from './slices/bookingSlice';


export const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
    [exampleApi.reducerPath]: exampleApi.reducer,

  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      exampleApi.middleware,
    ]),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector