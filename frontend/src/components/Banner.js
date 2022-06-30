import React,{useState,useEffect} from 'react'
import image from '../banners.jpeg';
import axios from 'axios'
function Banner() {

  const [movie,setMovie]=useState({})
  useEffect(function(){
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a929905f011ef77581817a0916b5204e&page=1"
    ).then(
        (res)=>{
          console.table(res.data.results)
          setMovie(res.data.results[0])
        }
      )
  },[])
  return (
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh]
     bg-center bg-cover justify-center
     flex items-end
     `}> 
        <div className="text-2xl md:text-4xl text-white
        p-5 bg-gray-900/40 bg-opacity-40
        w-full flex justify-center font-medium tracking-wider
        font-serif
        ">
            {movie.title}
        </div>
    </div>
  )
}

export default Banner