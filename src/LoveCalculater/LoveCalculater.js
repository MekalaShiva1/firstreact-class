import { useState } from "react" 
import "./lovecal.css"


 export const LoveCalculater=()=>{  
    const [name,setName]=useState("") ;
    const [patnarName,setPatnarName]=useState("")  
    const [result, setResult]=useState("") 
    const [isDark,setIsdark]=useState(false)



    const nameHandler=(events)=>{  
        setName(events.target.value) 
        console.log(setName)
        

    } 
    const partnarNameHandlar=(events)=>{ 
        setPatnarName(events.target.value) 
        console.log(setPatnarName);
        

    }
    const CalculatHandler=()=>{
        if(name!=="" && patnarName!==""){
        // const loveCalculate = Math.floor(Math.random()*100)+1;
        console.log(name, patnarName)
        //setResult(loveCalculate)
        myFunction(name, patnarName);
        }
    }

    const myFunction=(n1,n2)=>{
        //console.log('Hello, world!'+n1+' '+n2); 
        var m=(n1+n2).toLowerCase();
        var totalLength=m.length;
        const map=new Map();
        
        for(var i=0; i<totalLength; i++){
            if(map.has(m[i])){
                var tmp=map.get(m[i]);
                map.set(m[i], ++tmp);
            }else{
                map.set(m[i], 1);
            }
        }
        console.log(map);
        var sum=0;
        for(i=0; i<totalLength; i++){
            if(map.has(m[i])&&map.get(m[i])>1){
                sum=sum+map.get(m[i]);
                map.delete(m[i]);
            }
        }
        var percentage=((sum/totalLength)*100).toFixed(2);
        console.log('sum :'+sum);
        console.log('totalLength :'+totalLength);
        console.log('Match Percentage :'+percentage);
        setResult(percentage)
    } 

    // const theamHandler=()=>{ 
    //     setIsdark(prve=>!prve)

    // }

    return( 
        <div className={`${isDark? "light": "dark"}`} >

        
        <div className="container" >
            <h1>  { result === "" ? "love Calculater" : `love Scrore between ${name} & ${patnarName} is ${result}%` }</h1>  
            
            <div className="inputs"> 
            <input onChange={(e)=>nameHandler(e)}
             type="text" placeholder="Enter your name" 
             value={name}
              name="name" ></input> 
              

            <input type="text"
             placeholder="Enter your partnar name"
              name=" partnar name"   
              value={patnarName}
              onChange={(e)=>partnarNameHandlar(e)}>
            </input> 
            <button  className="calculatebutton" onClick={CalculatHandler} >Calculate</button> 

            </div> 

            {/* <button onClick={theamHandler} >{`${isDark? "light":"dark"}`}</button> */}

        </div> 
        </div>
    )

}