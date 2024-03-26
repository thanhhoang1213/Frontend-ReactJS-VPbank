import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import contentReducer from "../features/content/contentSlice";
import newsReducer from "../features/news/newsSlice";
import sliderReducer from "../features/slider/sliderSlice";
import userReducer from "./../features/users/userSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    slider: sliderReducer,
    content: contentReducer,
    news: newsReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export { store };
