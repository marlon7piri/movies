import React, { useEffect, useState } from "react";
import {BiSearchAlt2} from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useQuery } from "./useQuery";




export default function SearchMovie() {
  const query =useQuery()
  const search = query.get("search")
  const navigate=useNavigate()
  console.log(navigate);

const [text, setText] = useState("")


useEffect(()=>{
setText(search)

},[search])
 const handlerSubmit =(e)=>{

    e.preventDefault()
  

    navigate("/?search=" + text)





 }
  return (
    <div className="mt-[50px]">
      <form onSubmit={handlerSubmit}>
        <div className="flex gap-2 justify-center items-center">
          <input type="text" name="" id="" className="outline-none p-2 text-[24px] text-gray-900 rounded-md" onChange={(e)=>setText(e.target.value.toUpperCase())} value={text}/>
          <button type="submit"><BiSearchAlt2 className="text-white text-3xl font-black" /></button>
        </div>
      </form>
    </div>
  );
}
