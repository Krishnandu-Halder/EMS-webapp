import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = ()=>{

    

    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const [userData,SetUserData] = useContext(AuthContext)


    
    // console.log(userData.employees) 
    useEffect(() => {

        const loggedInUser = localStorage.getItem("loggedInUser")
        if(loggedInUser){
          const userData = JSON.parse(loggedInUser)
          setUser(userData.role)
          setLoggedInUserData(userData.data)
          // console.log("User is Logged In") 

      }
    },[])

    const handleLogin = (email,password)=>{
        if(email == 'admin@me.com' && password == '123'){
          setUser('admin')
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

        }else if(userData){
          const employee =  userData.find((e)=>email == e.email && e.password == password)
          if(employee){
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
          }
        }
        else{
          alert("Invalid Credentials")
        }
    }

    
    

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      { user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}  /> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
