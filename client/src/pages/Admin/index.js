import React from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import "./style.css";

function Admin() {

  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin/home">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Admin;
