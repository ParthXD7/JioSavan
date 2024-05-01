import React, { useEffect, useState } from "react";
import { BiSolidHome, BiLibrary } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const getPlaylists = async () => {
    const res = await fetch("http://localhost:5000/api/playlist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await res.json();
    console.log(d);
    setPlaylists(d.playlists);
  };
  useEffect(() => {
    getPlaylists();
  }, []);
  return (
    <div className="w-1/4 fixed left-0 mt-2 top-0 sidebar ">
      <div className="nav secondary_bg rounded-lg p-6">
      <img src="./assets/jio_saavn_logo.png" width={300} style={{ padding: '10px', margin: '20px' }}/>

        <Link to={"/"} className="flex items-center gap-6">
          <BiSolidHome className="font-bold text-2xl" />
          <span className="text-lg">Home</span>
        </Link>
        <Link to={"/search"} className="flex mt-4 items-center gap-6">
          <FiSearch className="font-bold text-2xl" />
          <span className="text-lg">Search</span>
        </Link>
      </div>
      <div className="mt-2 secondary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-4 items-center gap-4">
          <div className="flex gap-2 items-center">
            <BiLibrary className="font-bold text-xl" />
            <span>Your library</span>
          </div>
          <button className="hover:bg-black/25 rounded-[50%] p-2">
            <FaPlus className="font-bold text-xl" />
          </button>
        </div>
        <div className="btns flex gap-4 mb-4">
          <Link
            to={"/"}
            className="rounded-full mt-4 px-3   py-1 bg-white/10 text-white text-sm"
          >
            Playlists
          </Link>
          <Link
            to={"/"}
            className="rounded-full mt-4 px-3   py-1 bg-white/10 text-white text-sm"
          >
            Artists
          </Link>
        </div>
        <div className="my-6 px-2">
          {playlists.map((p) => {
            return (
              <div key={p._id} className="flex gap-4 my-2">
                <div>
                  <img
                    src="/assets/Arijit-1.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-white/80">
                    Playlist
                    <span> . {p.songs.length} Songs</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="your_library">
                    <div className="leading-8 mt-2 tertiary_bg rounded-lg py-6 px-4">
                        <p className="font-bold">Create your first playlist</p>
                        <p className="font-semibold">
                            It's easy, we'll help you
                        </p>
                        <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                            Create playlist
                        </button>
                    </div>
                    <div className="leading-8 mt-4 tertiary_bg rounded-lg py-6 px-4">
                        <p className="font-bold">
                            Let's find some podcasts to follow
                        </p>
                        <p className="font-semibold">
                            We'll keep you updated on new episodes
                        </p>
                        <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                            Browse Podcast
                        </button>
                    </div>
                </div> */}
      </div>
      <button className="mx-4 mt-12 text-sm border-white border rounded-full flex gap-2 px-3 py-1 items-center  text-white ">
        <TbWorld />
        <span className="text-white font-bold">English</span>
      </button>

   
    </div>
  );
};

export default Sidebar;
