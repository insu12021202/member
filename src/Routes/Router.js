import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPageTemplete from "../Components/Templetes/Login";
import MainPageTemplete from "../Components/Templetes/Main";
import PlayListTemplete from "../Components/Templetes/PlayList";
import ProfileTemplete from "../Components/Templetes/Profile";
import RegisterPageTemplete from "../Components/Templetes/Register";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageTemplete />}></Route>
        <Route path="/register" element={<RegisterPageTemplete />}></Route>
        <Route path="/login" element={<LoginPageTemplete />}></Route>
        <Route path="/profile" element={<ProfileTemplete />}></Route>
        <Route path="/playlist" element={<PlayListTemplete />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
