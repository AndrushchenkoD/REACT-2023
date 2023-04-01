import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts(){

    let [posts,setPosts]=useState([]);
    let [post,setPost]=useState({});

    let chosenPost=(props)=>{
        setPost(props);
    };

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()
                .then(value => {setPosts(value)}))
        },[])

    return(
      <div>
          {
              post.id && <div>{post.userId} {post.body}</div>
          }
          {
              posts.map((post,index)=><Post key={index} props={post}
              chosenPost={chosenPost}/>)
          }
      </div>
);
}