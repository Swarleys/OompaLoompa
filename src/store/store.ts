import { configureStore } from '@reduxjs/toolkit';
import { oompaLoompaApi } from '../service/oompaLoompaApi';

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [oompaLoompaApi.reducerPath]: oompaLoompaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(oompaLoompaApi.middleware),
});