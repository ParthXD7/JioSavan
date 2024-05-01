import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaExternalLinkAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { songs } from "./Home/Home";
import { useGlobalContext } from "../states/Contet";


const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.account);

  const location = useLocation();
  const [query, setQuery] = useState("");
  const { setFilteredSongs } = useGlobalContext();
  const filterSongs = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
    const fil = songs.filter((song) => {
      console.log(song);
      if (
        song.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.artist.toLowerCase().includes(e.target.value.toLowerCase())
      )
        return song;
    });
    console.log(fil);
    if (e.target.value === "") setFilteredSongs([]);
    else setFilteredSongs(fil);
  };
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <header className="flex sticky top-0 z-50 justify-between ml-2 rounded-[6px]  mt-2 px-8 secondary_bg items-center ">
      <div className="flex gap-2 items-center  w-1/2">
        <FaAngleLeft className="bg-white/10 text-3xl p-1  rounded-[50%] " />
        <FaAngleRight className="bg-white/10 text-3xl p-1  rounded-[50%] " />
        <div
          className={`${
            location.pathname !== "/search" ? "opacity-0" : ""
          } w-full text-left py-4 relative`}
        >
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Search"
            autoComplete="off"
            value={query}
            onChange={filterSongs}
            className={`block  w-full rounded-full pl-12 border  text-gray-300 shadow-sm ring ring-transparent placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white outline-none p-3 hover:ring-white/20 `}
          />
          <FaSearch className="absolute left-4 top-8" />
        </div>
      </div>

     
    </header>
  );
};

export default Navbar;
