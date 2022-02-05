import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo , deleteTodo , removeTodo } from "./actions/index";
import "./todo.css";


const Todo=()=>{
  
    const [inputData,setInputData]=useState('');
    const list=useSelector((state)=>state.todoReducers.list);

    const Dispatch= useDispatch();

return(
    <>
    
    <div className="main-div">
    <div className="child-div">
    <figure>
      <figcaption>
        Todo App
      </figcaption>
    </figure>


    <div className="additems">
      <input type="text" placeholder='Add Items'
          value={inputData}
          onChange={(event)=> setInputData(event.target.value)}
      />
      <i className="fa fa-plus add-btn" onClick={()=> Dispatch(addTodo(inputData),
        setInputData('')
      ) } ></i>
    </div>
    <div className="showItems">
    {
      list.map((elem)=>{
        return(

        <div className="eachItems" key={elem.id}>
        <h3> {elem.data} </h3>
        <div className="todo-btn">
        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=> Dispatch(deleteTodo(elem.id)
      ) } ></i>
      </div>
      </div>
        )

        

      })
    }
      
    </div>

    <div className="showItems">
      <button className="btn eddect04"  
      onClick={()=>Dispatch(removeTodo())}>
      <span>Delete All</span></button>
    </div>




    </div>
      
    </div>

</>

);
}
export default Todo