import { useState } from "react" 
import './forms.css'



export const FormExample =()=>{ 

    const [username ,setUserName] = useState(" ") 
    const  UserInputs =(each)=>{
        setUserName(each.target.value) 
        console.log(setUserName);
    }
    return(  
        <section className="example"> 
        <h1>Hello, {username}</h1>
        <div className="forminputs">
           <input type="search" placeholder="Secrch Here" onChange={UserInputs}/>
        </div> 
        </section>

    )
}