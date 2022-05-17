import axios from "axios";

const authFetch = axios.create( {
baseURL : "localhost:4000"
     
})

authFetch.interceptors.request.use((request)=> {
    request.headers.common['Accept'] = 'application/json',
    console.log(request);
    return request;

} ,(error)=> {
 return Promise.reject(error)
})

authFetch.interceptors.response.use((response)=> {
   
    return response;

} ,(error)=> {
    console.log(error)
 return Promise.reject(error)
})

