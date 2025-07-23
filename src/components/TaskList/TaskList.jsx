import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-auto w-full flex items-center gap-5 flex-nowrap justify-start py-5  mt-10"
    >

      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}

      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}
      
    </div>
  );
};

export default TaskList;



{/* <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 text-sm py-1 rounded  ">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
          tempora sunt error omnis quibusdam.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 text-sm py-1 rounded  ">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
          tempora sunt error omnis quibusdam.
        </p>
      </div> */}