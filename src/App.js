import "./App.css"  
import {Conditons} from "./StateHook/Condition/Conditionss"; 
import { Fals} from "./StateHook/Condition/Conditions2" ;

import {useState} from "react";
import{Click} from "./Events/onClick";
import {FormExample} from "./forms/forms";
import {Uncontrol} from "./forms/uncontroll" 
import{Recipi} from "./useEffect/recipis";

import{Stack} from "./Navigation/Stack";
import Countyapi from "./task/Countyapi";
import Parentprop from "./propstask/parentprop";   
import {UseStateExample} from "./useState/useStateExample1"
// import {useStateExample} from "./useState/useStateExample1"
import{Todos} from "./useState/Todos"
import { Catdata } from "./useState/Catdata";
import { MovieListScreen } from "./screens/MovieList";




const New=()=>{ 

  // const [sampleCondition,setSampleCondition]=useState(false) 
  return(
    // <div> 
    //   <h1>
    //   {sampleCondition? <Conditons/>:< Fals/>} 
    //   </h1>
    // </div> 

    <div>
      <h1>
        {/* <Click></Click> */}
      </h1>  
      <div>
      {/* <FormExample/>  */}
        </div> 
        <div>
          {/* <Uncontrol/>  */}

          {/* <Recipi/> */}
        </div> 
        <div>
          {/* <Stack/> */} 
          {/* <Countyapi/>  */}
          {/* <Parentprop/>  */}
          {/* <useStateExample/>  */} 
          {/* <UseStateExample/>  */}
          {/* <Todos/>  */}
          {/* <Catdata/> */}
          <MovieListScreen/>
        </div> 

        
    </div>
  );
} 

export default New;