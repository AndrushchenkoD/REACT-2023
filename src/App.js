import Users from "./components/Users";
import {useEffect, useState} from "react";
import {getUserPosts} from "./services";
import Post from "./components/Post";

function App() {
    let[posts,setPosts]=useState([]);
    let[currentUser,setcurrentUser]=useState([]);
    let chosenUser=(props)=>setcurrentUser(props)
    useEffect(()=>{
        getUserPosts(currentUser.id).then(value => setPosts(value))
    },[currentUser.id])

  return (

    <div>
      <Users chosenUser={chosenUser}/>
        <hr/>
        Current user posts
        {
           posts.map(post=><Post key={post.id} props={post}/>)
        }
    </div>
  );
}

export default App;
