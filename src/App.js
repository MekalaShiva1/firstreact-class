// import "./App.css"  
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
import { Controll } from "./forms/controlform";
import UseReducer from "./useReducer/UseReducer";
import { LoveCalculater } from "./LoveCalculater/LoveCalculater";
import { WeatherChecker } from "./WeatherApp/Weather";




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
          
          {/* <Parentprop/>  */}
          {/* <useStateExample/>  */} 
          {/* <UseStateExample/>  */}
          {/* <Todos/>  */}
          {/* <Catdata/> */}
          {/* <MovieListScreen/>  */}

          {/* <Controll/> */}
          {/* <UseReducer/> */} 
          {/* <LoveCalculater/>  */}
          
        </div>  
        <div>
        <WeatherChecker/>


        {/* <Countyapi/>  */}
        </div>

        
    </div>
  );
} 

export default New;