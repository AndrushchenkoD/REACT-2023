import {Link} from "react-router-dom";



export default function Comment({props}){

    return(
      <div>
          <ul>
              {<Link to={props.postId.toString()}>
              <li>postId:{props.postId}</li>
              <li>id:{props.id}</li>
              <li>name:{props.name}</li>
              <li>email:{props.email}</li>
              <li>body:{props.body}</li>
          </Link>
          }
          </ul>

      </div>
);
}