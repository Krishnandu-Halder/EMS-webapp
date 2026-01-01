import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.png'

const Header = (props) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const employees = JSON.parse(localStorage.getItem("employees"));

    if (!loggedInUser) return;

    // Admin case
    if (loggedInUser.role === "admin") {
      setUserName("Admin");
    }
    // Employee case
    else {
      const employee = employees?.find(
        (emp) => emp.email === loggedInUser.email
      );
      setUserName(employee?.firstname || "Employee");
    }
  }, []);

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {userName} 👋🏻
        </span>
      </h1>
      <img src={logo} alt="logo" className="w-16 h-16 mr-500" />


      <button
        onClick={logOut}
        className="bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
