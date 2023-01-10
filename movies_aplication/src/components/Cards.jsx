import React from "react";
import { Link } from "react-router-dom";


export default function Cards({ movie }) {
  const urlimages = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (<>
    
    <Link to={"/verdetalles/"+ movie.id}>
    <div key={movie.id} className=" cursor-pointer hover:opacity-60 transition duration-300
    ">
      <img src={urlimages} alt={movie.title} className="rounded-md sm:w-[400px] "></img>
      <h2 className="mt-4">{movie.title}</h2>
    </div>
    </Link>
    </>
  );
 
}
