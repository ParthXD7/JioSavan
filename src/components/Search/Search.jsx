import React from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Card from "../Card/Card";
import SongBar from "../MasterBar/SongBar";

const Search = () => {
  const { filteredSongs } = useGlobalContext();
  return (
    <Layout>
      <Navbar />
      <div className="tertiary_bg mx-4 px-4 py-4 home ">

        {filteredSongs?.length > 0 && (
          <div className="grid  gap-6 grid-cols-5">
            {filteredSongs.map((song) => {
              return <Card key={song.id} song={song} />;
            })}
          </div>
        )}
      </div>
      <SongBar />
    </Layout>
  );
};


export default Search;
