
import React from 'react'
const Api="https://api.themoviedb.org/3/";
export default async function  HttpApi(path) {
  return  await fetch(Api+path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDQxOTYwYWYyMjQ4NTM4YWFhZDI2NGI0NmI5ODExZSIsInN1YiI6IjYzNjc1YmZhYzA0OGE5MDA4MWQ4NjExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qtP-_30Op9sJSQY1LSwAWPYHNejFGJ8AUM6D1xdGjmQ",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json())

 
}
