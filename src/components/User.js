export default function User({props,chosenUser}){
    return(
      <div>
          <div>{props.id} {props.name}</div>

<button onClick={()=>{chosenUser(props)}}>click</button>
      </div>
);
}