import { combineReducers, configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./featured/FeaturedSlice";
import jobReducer from "./jobLists/jobListSlice";
import internReducer from "./intern/internSlice";
import blogReducer from "./blogs/blogListSlice";
import loginReducer from "./login/LoginSlice";
import registerReducer from "./register/RegisterSlice";
import authReducer from "./Auth/authSlice";
import filterReducer from "./filterJob/filterJobSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define a separate persist configuration for the user reducer
const userPersistConfig = {
  key: "candidate",
  version: 1,
  storage,
};

// Create the user reducer with persisting configuration
const persistedUserReducer = persistReducer(userPersistConfig, loginReducer);

const rootReducer = combineReducers({
  newUser: registerReducer,
  user: persistedUserReducer,
  auth: authReducer,
  featured: featuredReducer,
  jobs: jobReducer,
  interns: internReducer,
  blogs: blogReducer,
  filterjobs: filterReducer,
});

// Create the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
