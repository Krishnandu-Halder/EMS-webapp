import React, { useState } from "react";
import logo from '../../assets/logo.png'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is ",email);
        // console.log("password is ",password);
        setEmail("")
        setPassword("")
    }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20   ">Employee Management System</h1>
      <img src={logo} alt="logo" className="mx-auto mt-5 w-full md:w-1/2 lg:w-64 h-auto" />
    <div className="flex h-screen w-screen items-center justify-center mt-[-250px]">
      <div className=" rounded-xl border-2 border-violet-500 p-20">
        <form onSubmit={(e)=>{
                submitHandler(e);
            }}  className="flex flex-col items-center justify-center">

          <input
          id="email" name="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            required
            className="border-2 border-violet-600 outline-null bg-transparent placeholder:text-gray-400  text-xl px-5 py-3  rounded-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
          id="password" name="password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="border-2 mb-5 mt-5 border-violet-600 outline-null bg-transparent placeholder:text-gray-400  text-xl px-5 py-3  rounded-full"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" bg-violet-600 outline-null text-white  placeholder:text-black text-xl px-5 py-3  rounded-full">
            Log In
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
