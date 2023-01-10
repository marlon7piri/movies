import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Cards from "../components/Cards";
import HttpApi from "../components/HttpApi";

import SearchMovie from "../components/SearchMovie";
import Spinner from "../components/Spinner";
import { useQuery } from "../components/useQuery";



export default function Peliculas() {


  const [isloading, setIsloading] = useState(true)
  const [movies, setMovies] = useState([]);

  
  const query =useQuery()
  console.log(query)
  const search = query.get("search")
 

  
  useEffect(() => {
    setIsloading(true)
const URlSearch = search
 ? "/search/movie?query=" + search 
 : "discover/movie" ;

    HttpApi(URlSearch).then((data) => {
       
    setMovies(data.results); 
    setIsloading(false)
      })
     


   
     
  }, [search]);
  if(isloading){
    return <Spinner/>
  }

  return (

    <div className="flex flex-col justify-center items-center">

<SearchMovie/>
    
    <div className=" grid mt-[50px] gap-4 p-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Cards key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
    </div>
  );
}
