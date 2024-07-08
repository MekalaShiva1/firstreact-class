import "./App.css"  
import {Conditons} from "./StateHook/Condition/Conditionss"; 
import { Fals} from "./StateHook/Condition/Conditions2" ;

import {useState} from "react";
import{Click} from "./Events/onClick";
import {FormExample} from "./forms/forms";
import {Uncontrol} from "./forms/uncontroll" 
import{Recipi} from "./useEffect/recipis" 

import{Stack} from "./Navigation/Stack"




const New=()=>{ 

  const [sampleCondition,setSampleCondition]=useState(false) 
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
      <FormExample/> 
        </div> 
        <div>
          <Uncontrol/> 

          <Recipi/>
        </div> 
        <div>
          {/* <Stack/> */}
        </div>
    </div>
  );
} 

export default New;