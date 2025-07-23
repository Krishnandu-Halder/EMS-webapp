import {React,useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstname)
  // }
const logOut = ()=>{
  localStorage.setItem('loggedInUser','')
  // console.log(props.changeUser)
  props.changeUser('')
  // window.location.reload() 
}

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>userName 👋🏻</span> </h1>
        <button
        onClick={logOut}
        className='bg-red-600 text-lg font-medium  text-white px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header