import { useState } from "react" 

import './forms.css'




export const Controll =()=>{ 

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");  
    const [isDark,setIsDark]=useState(false)


    const submitHandler=(e)=>{ 
        e.preventDefault(); 

        console.log(name,email);
        
    }  

    const themHandler=()=>{  
        setIsDark(prve=>!prve);


    }

    return(
        <div className={`${isDark? 'Dark':'light'}`}> 
            <form onSubmit={submitHandler} className="forms">

           
            <input placeholder="Enter your name" type="text" onChange={(e)=>setName(e.target.value)}></input>  
            <br/>
            <input placeholder=" Enter your email" type="text" onChange={(e)=>setEmail(e.target.value)} ></input>  
            <br/>
            <button type="submit"  >Submit</button>  
            &nbsp; 
            
            </form> 
            <button  onClick={themHandler} >{`${isDark? 'Dark':'light'}`}</button>
        </div>
    )

}