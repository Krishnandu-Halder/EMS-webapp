import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

  const [userData,setUserData] =  useContext(AuthContext)


  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAsignTo, setTaskAsignTo] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask, setNewTask] = useState({})
  
  const submitHandler=(e)=>{
      e.preventDefault()

    setNewTask({taskTitle,taskDate,taskAsignTo,taskCategory,taskDescription,active:false,newTask:true,failed:false,completed:false})
    
    const data = userData
    // console.log(data);

    data.forEach((elem)=>{
      if(taskAsignTo == elem.firstname){
          elem.tasks.push(newTask)
          elem.taskNumber.newTask = elem.taskNumber.newTask + 1
      }
    })
    setUserData(data);
    // console.log(data);

    // localStorage.setItem('employees',JSON.stringify(data))

      setTaskDate('')
      setTaskAsignTo('')
      setTaskCategory('')
      setTaskDescription('')
      setTaskTitle('')

     
  }

  return (
     <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form
          onSubmit={(e)=>{
            submitHandler(e)
            console.log('Task created')
          }}
          className=" flex w-full flex-wrap   items-start justify-between  "
          action=""
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a Ui design"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
              value={taskAsignTo}
              onChange={(e)=>{
                setTaskAsignTo(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category </h3>
              <input
              value={taskCategory}
              onChange={(e)=>{
                setTaskCategory(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3>Description </h3>
            <textarea 
             value={taskDescription}
             onChange={(e)=>{
              setTaskDescription(e.target.value)
             }}
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
          
          <button className="w-full mt-4 text-sm rounded px-5 bg-violet-500 py-3 hover:bg-violet-600    ">
            Create Task
          </button></div>
        </form>
      </div>
  )
}

export default CreateTask