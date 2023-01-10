import React, { useEffect } from "react";

import HttpApi from "../components/HttpApi";
import { useParams } from "react-router";
import { useState} from "react";
import Spinner from "../components/Spinner";


export default function VerDetalles() {
  const [isloading, setIsloading] = useState(true)
    const {movieId}=useParams()
const[movies,setMovies]=useState(null);
  useEffect(() => {
setIsloading(true)
    HttpApi("/movie/" + movieId).then(data=>{
        setMovies(data)
        setIsloading(false)
    }) 
   
  },[movieId]);

  if(isloading){
    return <Spinner/>
  }

  if(!movies){
    return null;
  }

 

  const image = "https://image.tmdb.org/t/p/w300" + movies.poster_path;

  return (
    <div key={movies.id} className="movie_container flex justify-center item-center px-4">
      <div className="">
        <img src={image} alt="soy la imagen" className="object-cover w-[250px] sm:w-[250px] md:w-[250px]" />
      </div>
      <div className="flex flex-col gap-4 ml-6 px-3  text-left">
        <p className="text-white text-1xl mt-6 w-fit">{movies.genres.map(gener=>gener.name).join(", ")}</p>
        <h1 className="w-fit">{movies.title}</h1>
        <p className="text-white text-left px-4">{movies.overview}</p>
      </div>
    </div>
  );
}
