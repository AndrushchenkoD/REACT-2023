import {useForm} from "react-hook-form";
import {saveUser} from "../services/user.post.service";

export default function UserSave(){


    let {register,handleSubmit}=useForm();

    let submit=(data)=>{
        saveUser(data).then(({data})=>console.log(data));

    }

    return(
      <div>
          <form onSubmit={handleSubmit(submit)}>
          <input{...register("name")}/>
          <input{...register("username")}/>
              <button>save</button>
          </form>
      </div>
);
}