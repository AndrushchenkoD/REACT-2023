import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import Post from "./components/post/Post";

function App() {
    let [posts,setPosts]=useState([]);
    let [user,setUser]=useState({})

    useEffect(()=>{
        if (user.id){fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(
            value => value.json().then(
                value=>setPosts(value)
            )
        )}
    },[user.id])

    let chosenUser=(props)=>{
        setUser(props);
    };

  return (
    <div>
    <Users chosenUser={chosenUser}/>
        {
          posts.map((post,index)=><Post key={index} postProps={post}/>)
        }
    </div>
  );
}

export default App;
