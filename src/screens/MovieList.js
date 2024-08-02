// import React, { useEffect, useState } from "react"
// import {MovieList} from "../api/movieapi"

//  export const MovieListScreen=()=>{

//     const [moviesList,setMoviesList]=useState([])

//     const callBackMovieList=(res)=>{

//         setMoviesList(res)

//     }

//     useEffect(()=>{
//         MovieList(callBackMovieList);

//     },[])
//     console.log("movie",moviesList);

//     return(
//         <>
//         {
//             moviesList.length>0? moviesList.map((movieObj,i)=>{
//                 console.log("moviesssss",movieObj);
//                 <div key={i} >

//                 <h1>{movieObj.movie}</h1>

//                 </div>
//             }):null

//         }
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import { MovieList } from "../api/movieapi";

export const MovieListScreen = () => {
  const [moviesList, setMoviesList] = useState([]);

  const callBackMovieList = (res) => {
    console.log("lissss", res);
    setMoviesList(res);
  };

  useEffect(() => {
    MovieList(callBackMovieList);
  }, []);

  console.log("movie", moviesList);

  return (
    <>
      {moviesList.length > 0
        ? moviesList.map((movieObj, i) => {
            console.log("moviesssss", movieObj);
            return <div key={i}>{/* <h1>{movieObj.movie}</h1> */}</div>;
          })
        : null}
      <table style={{
            border:"1px solid black"
        }}>
        <tr style={{
            border:"1px solid black"
        }}>
          <th>ID</th>
          <th>Movie_Name</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
        {moviesList.map((moviesList) => {
          return (
            <tr>
              <td
                style={{
                  border: "1px solid black",
                }}
              >
                {moviesList.id}
              </td>
              <td
                style={{
                  border: "1px solid black",
                }}
              >
                {moviesList.movie}
              </td>
              <td
                style={{
                  border: "1px solid black",
                }}
              >
                <img src={moviesList.image} height={100} width={100} alt="image" />
              </td>
              <td
                style={{
                  border: "1px solid black",
                }}
              >
                {moviesList.rating}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
