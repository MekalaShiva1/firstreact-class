import {useState} from "react"
import useEffect from "react"
import axios from "axios"

 



export const Recipi =()=>{   

    const [data,setData]=useState([]) 

    useEffect (()=>{ 

        fetchData();

    });

    // const RecipiHandler=()={
    // }



    const fetchData = async () => {
        try  {
          const response1 = await axios.get("https://dummyjson.com/recipes"); 
          console.log(response1)
          if (response1.status === 200) {
            setData(response1.data);
          } 
          else{

          }
        }
          catch(error){
           console.error(error)
          }
        }  
    
        
    

    return(
        <div> 
            <h1>New Recipies~</h1> 
        

        </div>
    )
}