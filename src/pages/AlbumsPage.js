import {useEffect, useState} from "react";
import {getAlbums} from "../Services";
import Album from "../components/Album";

export default function AlbumsPage(){

    let [albums,setAlbums]=useState([]);

    useEffect(()=>{
        getAlbums.then(value => setAlbums(value))
    },[])

    return(
      <div>
          {
              albums.map((album)=><Album key={album.id} props={album}/>)
          }
      </div>
);
}