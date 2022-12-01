import React from 'react'
import { RiSearch2Line } from "react-icons/ri"
import {BsFillSunFill} from "react-icons/bs"
import img from "../images/icon.png"
import { useGlobalContext } from '../context/useGlobalContext'

function Search() {
  const { query, setQuery, handleSubmit, navRound } = useGlobalContext();

  return (
    <section className="search sticky top-0 z-50 ">
      <form className={`shadow-lg shadow-black/20  mb-8 flex gap-4 justify-between items-center backdrop-blur-2xl bg-white/30 p-3 ${navRound}`}>
        <div className="icon">
          <a
            href="http://alriadhridoy.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img} alt="author" className="w-12" />
          </a>
        </div>

        <div className="search_bar flex gap-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="search photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-5  w-full rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <button
            type="submit"
            className=" text-sky-800 bg-slate-200 p-3 md:p-4 rounded-lg hover:bg-slate-300 ease-linear duration-100"
            onClick={(e) => handleSubmit(e)}
          >
            <RiSearch2Line />
          </button>
        </div>
        <div className="dark_theme">
          <h1 className=" text-yellow-200 text-2xl pr-5">
            <BsFillSunFill />
          </h1>
        </div>
      </form>
    </section>
  );
}

export default Search
