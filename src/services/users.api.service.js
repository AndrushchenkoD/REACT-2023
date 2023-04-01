import axios from "axios";


let AxiousInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const getUsers=AxiousInstance.get('/users').then(value => value.data);

const getUserPosts=(id)=>AxiousInstance.get('/users/'+id+'/posts').then(value => value.data);

export {
    getUsers,getUserPosts
}