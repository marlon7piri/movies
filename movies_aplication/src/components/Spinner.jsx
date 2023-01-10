import React from 'react'
import {BiLoaderCircle} from 'react-icons/bi';

export default function Spinner() {
  return (
    <div className='flex justify-center items-center'><BiLoaderCircle size={100} className="spinner text-white"/></div>
  )
}
