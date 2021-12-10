import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import Update from "./components/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
