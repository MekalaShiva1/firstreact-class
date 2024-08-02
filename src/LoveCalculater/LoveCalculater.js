import { useState } from "react"


 export const LoveCalculater=()=>{  
    const [name,setName]=useState("")   



    const nameHandler=(e)=>{  
        setName(e.target.value) 
        console.log(setName)
        

    }
    const CalculatHandler=(e)=>{ 

        

    }

    return(
        <div>
            <h1>Calculater</h1> 
            <input onChange={nameHandler} type="text" placeholder="Enter your name" name="name" ></input>
            <input type="text" placeholder="Enter your partnar name" name=" partnar name" ></input> 
            <button onClick={CalculatHandler} >Calculate</button>

        </div>
    )

}