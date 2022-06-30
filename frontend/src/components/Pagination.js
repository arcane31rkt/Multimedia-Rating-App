import React,{useState} from 'react'

function Pagination({pageProp,goBack,goAhead}) {
   
  return (<>
    <div className="w-full flex justify-center mb-7 py-4">
        <button className="
        p-2 border-2 border-gray-600
        border-r-0 rounded-l-xl hover:scale-105
        "
         onClick={goBack}
         >Prev</button>
        <button className="
        p-2 border-2 border-gray-600
        border-r-0
        bg-gray-200
        ">
          {pageProp}
          </button>
        <button className="
        p-2 border-2 border-gray-600
        rounded-r-xl hover:scale-105 
        relative
        " 
        onClick={goAhead}
        >Next</button>
    </div>
    <div className=" absolute right-1 text-xs mb-7 py-4 r-2">Dev credit: Rohit Kumar Tiwari</div>
    </>
  )
}

export default Pagination