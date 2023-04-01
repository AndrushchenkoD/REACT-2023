import {useEffect, useState} from "react";
import {getUsers} from "../services";
import User from "./User";

export default function Users({chosenUser}){

    let [users,setUsers]=useState([]);

    useEffect(()=>{
        getUsers.then(value => setUsers(value));
    },[])

    return(
      <div>
          {
              users.map((user)=><User key={user.id} props={user} chosenUser={chosenUser}/>)
          }
      </div>
);
}