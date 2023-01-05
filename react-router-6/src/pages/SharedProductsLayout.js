import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
const SharedProductsLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};
export default SharedProductsLayout;
