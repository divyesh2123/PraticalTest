import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    Authorization : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mjc0YWEzZGQzYWMyZDFmNjg3MGQzZTQiLCJpZCI6IjYyNzRhYTNkZDNhYzJkMWY2ODcwZDNlNCIsImlhdCI6MTY1MTgxNDIzNCwiZXhwIjoxNjUxODE1MTM0fQ.a48YottbGKxkQFHhp6xCEu2z12DnZtanKoWYToJzqyg"
  },
});

export default authFetch;