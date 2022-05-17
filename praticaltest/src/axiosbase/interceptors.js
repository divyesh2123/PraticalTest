import axios from "axios";

const authFetch = axios.create( {
baseURL : "http://localhost:4000"
     
})



  
  authFetch.interceptors.request.use(
    (request) => {
      request.headers.common['Accept'] = 'application/json';
      request.headers.common['Authorization'] = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mjc0YWEzZGQzYWMyZDFmNjg3MGQzZTQiLCJpZCI6IjYyNzRhYTNkZDNhYzJkMWY2ODcwZDNlNCIsImlhdCI6MTY1MTgxNDIzNCwiZXhwIjoxNjUxODE1MTM0fQ.a48YottbGKxkQFHhp6xCEu2z12DnZtanKoWYToJzqyg"
      console.log('request sent');
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetch;