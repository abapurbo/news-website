import React from "react";
import Navbar from "../components/Common/Navbar";
import Home from "../Pages/Home";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}
