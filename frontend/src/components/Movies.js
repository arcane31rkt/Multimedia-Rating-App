import React,{useState,useEffect} from 'react';
import image from '../banners.jpeg';
import Pagination from './Pagination';
import axios from 'axios';
import { Oval } from  'react-loader-spinner';
import Favourites from './Favourites';
<Oval
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
function Movies() {
  
  const [movies,setMovies]=useState([])
  const [x,setPage]=useState(1)
  const [hover,setHover]=useState('')
  const [fav,setFav]=useState([])

  function forward(){
    setPage(x+1);
  }
  function backward(){
    if(x>1)
    setPage(x-1);
  }
  useEffect(function(){
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a929905f011ef77581817a0916b5204e&page=${x}`
    ).then(
        (res)=>{
          console.table(res.data.results)
          setMovies(res.data.results)
          let oldFav=localStorage.getItem("imdb");
          oldFav=JSON.parse(oldFav)
          setFav([...oldFav])
        }
      )
  },[x])

  let add =(movie)=>{
      let newArray =[...fav,movie]
      setFav([...newArray])
      console.log(newArray)
      localStorage.setItem("imdb",JSON.stringify(newArray))
  }
  
  let del =(movie)=>{
      let newArray = fav.filter((m)=>m.id!=movie.id)
      setFav([...newArray])
      localStorage.setItem("imdb",JSON.stringify(newArray))
  }

  return (
    <>
    <div className="mb-8 text-center">
      <div className="mt-12 mb-10 font-medium text-3xl text-center">
          Trending This Week
      </div>
      {
          movies.length==0?
          <div className='flex justify-center'>
            <Oval
              height="100"
              width="100"
              color='grey'
              secondaryColor='grey'
              ariaLabel='loading'
            />
          </div> :

          <div className="flex flex-wrap justify-center">
            {
                movies.map((movie)=>
                  <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                  bg-center bg-cover
                  h-[25vh] w-[150px]
                  md:h-[30vh] md:w-[200px] 
                  rounded-xl flex items-end m-4
                  hover:scale-110
                  ease-out duration-300 
                  relative
                  `}onMouseEnter={()=>{
                    setHover(movie.id)
                    console.log(movie.id)}}
                    
                    onMouseLeave={()=>
                      setHover("")}
                    >
                    {
                        hover==movie.id &&<>
                        {
                          
                            !fav.find((m)=>m.id==movie.id) ?
                        
                            <div className='absolute top-1 right-1
                            p-1 bg-gray-800/40 rounded-xl cursor-pointer'
                            onClick={()=>add(movie)}>
                            💖</div>:

                            <div className='absolute top-1 right-1
                            p-1 bg-gray-800/40 rounded-xl cursor-pointer'
                            onClick={()=>del(movie)}>
                            ❌</div>

 
                        }
                      
                        <div className='absolute top-1 left-1 p-1 text-white 
                        text-clip overflow-hidden
                          bg-gray-800/40 rounded-xl text-sm'>⭐{movie.vote_average}</div> 
                         

                        
                    </>
                    } 

                    <div className="w-full bg-gray-900/70 text-white py-2  text-center   rounded-b-xl">{movie.title}
                    </div>
                  </div>
                )
            }
            
          </div>

    }
    </div>
    <Pagination pageProp={x} goBack={backward} goAhead={forward}/>
    </>
  )
}

export default Movies