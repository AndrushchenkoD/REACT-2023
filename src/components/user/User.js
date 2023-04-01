export default function User({props,chosenUser}){
    return(
      <div>
          {props.id}{props.name}
          <button onClick={()=>{
               chosenUser(props)
          }}>Posts of current user</button>
      </div>
);
}