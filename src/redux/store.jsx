import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: { 
    contacts: contactsReducer,
  },
});


// import { persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: 'filter',
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: { 
//     contacts: contactsReducer,
//     filter: { changeFilterAction },
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//   })
// });
