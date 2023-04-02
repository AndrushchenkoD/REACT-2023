import {useForm} from "react-hook-form";
import {saveComment} from "../services/comment.service";

export default function CommentSave(){

    let {register,handleSubmit}=useForm()

    let submit=(data)=>{
        saveComment(data).then(value => console.log(value));
    }

    return(
      <div>
          <form onSubmit={handleSubmit(submit)}>
              <input{...register("name")}/>
              <input{...register("body")}/>
              <button>save</button>
          </form>
      </div>
);
}