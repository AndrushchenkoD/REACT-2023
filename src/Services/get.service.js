import axios from "axios";
import {BASEURL} from "../constants/constants";

let AxiousInstance=axios.create({
    baseURL:BASEURL
})

const getTodos=AxiousInstance.get('/todos').then(value => value.data);
const getAlbums=AxiousInstance.get('/albums').then(value => value.data);
const getComments=AxiousInstance.get('/comments').then(value => value.data);
const getPostsByCommentID=(postId)=>AxiousInstance.get(`/posts/${postId}`).then(value => value.data);

export {getAlbums,getTodos,getComments,getPostsByCommentID};