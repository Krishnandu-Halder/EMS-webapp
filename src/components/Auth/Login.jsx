import React, { useState } from "react";

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
    <div className="flex h-screen w-screen items-center justify-center">
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
  );
};

export default Login;
