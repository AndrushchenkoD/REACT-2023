import {useEffect, useState} from "react";
import {getComments} from "../Services";
import Comment from "../components/Comment";
import {Outlet} from "react-router-dom";


export default function CommentsPage(){

    let [comments,setComments]=useState([]);

    useEffect(()=>{
        getComments.then(value => setComments(value))
    },[])
    return(
      <div>
      <Outlet/>
          {
              comments.map((comment)=><Comment key={comment.id} props={comment}/>)
          }

      </div>
);
}