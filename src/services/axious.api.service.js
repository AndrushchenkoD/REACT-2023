import axios from "axios";
import {BASEURL, urls} from "../constants/URL";



export class AxiousApiService{

axiosInstance=axios.create({baseURL:BASEURL});
    getPosts(){
return this.axiosInstance.get(urls.posts).then(value=>value.data);
    };

    getComments(){
        return this.axiosInstance.get(urls.comments).then(value => value.data);
    }
}
