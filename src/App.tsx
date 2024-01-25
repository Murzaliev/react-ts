import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/users";
import CreateUserPage from "./pages/create-user";
import UpdateUserPage from "./pages/update-users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/update-user" element={<UpdateUserPage />} />
      </Routes>
    </>
  );
}

export default App;
