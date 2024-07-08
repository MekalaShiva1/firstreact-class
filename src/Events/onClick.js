import {useState} from "react"

 export const Click=()=>{

    const [number, setNumber]=useState(0)  
    
    const Increment=()=>{ 
        setNumber(number +1) 
        
    } 

    const Decrement=()=>{ 
        if(number>0){
        setNumber(number -1) 
    }
    } 

    const Restart=()=>{
        setNumber(0)
    }

    return(
        <div>
            <h3>
                {number}
            </h3> 
            <button onClick={Increment} >Increment</button>  
            &nbsp;
            <button onClick={Decrement}>Decrement</button>  
            &nbsp;
            <button onClick={Restart} >Restart</button>
        </div>
    )
}