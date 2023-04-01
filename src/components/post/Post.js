export default function Post({props,chosenPost}){
    return(
      <div>
              {props.id} {props.title}
          <button onClick={()=>{chosenPost(props)}}>Post details</button>

      </div>
);
}