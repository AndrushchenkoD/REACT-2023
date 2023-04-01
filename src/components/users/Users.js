import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users({chosenUser}){

    let [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(
            value => value.json().then(
                value=>setUsers(value)))
    },[])

    return(
      <div>
          {
              users.map((user,index)=><User key={index} props={user} chosenUser={chosenUser}/>)
          }
      </div>
);
}