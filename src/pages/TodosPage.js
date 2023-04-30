import {useEffect, useState} from "react";
import {getTodos} from "../Services";
import Todo from "../components/Todo";

export default function TodosPage(){
let [todos,setTodos]=useState([]);

    useEffect(()=>{
        getTodos.then(value => setTodos(value))
    },[])

    return(
      <div>
          {
              todos.map((todo)=><Todo key={todo.id} props={todo}/>)
          }

      </div>
);
}