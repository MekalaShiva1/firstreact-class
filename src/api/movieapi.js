import axios from "axios";

export const MovieList = (callBackMovieList) => {
    try {
       const url = `https://dummyapi.online/api/movies`;
    //   const ApiKey=Config.API_KEY
  
      axios.get(url,{
        headers:
         { 
            "Accept": "application/json",
        "Content-Type": "application/json"
        }
       
        
      })
        .then(({ data }) => { 

            callBackMovieList(data)
  
          
        });
    } catch (err) {
        callBackMovieList({ "Status": "Error", "Message": err.Message })
    }
  };