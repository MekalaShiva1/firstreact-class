





import axios from 'axios';
import React, { useEffect, useState } from 'react' ; 
import "./country.css"

function Countyapi() { 
    const[country,setcountry]=useState([])   
    const[selectedcountry,setselectedcountry]=useState()  
    const [Captial,setCaptial]=useState("")
    
 
    useEffect(()=>{ 
        fetchdata();
    },[])  

    const  fetchdata=async()=>{
        const responce=await axios.get("https://restcountries.com/v3.1/all") 
        console.log(responce.data ,"responce");     
        const result=nameExtracter(responce.data);  
    
    

        // console.log(result); 
        setcountry(result) 
        

        

        // 

    } 

     const nameExtracter=(data)=>{ 
        return data.map((each)=>each.name.official)
     }  



     const selectCountryHandler=(event)=>{ 
        setselectedcountry(event.target.value)
        console.log(event.target.value) 
        selectedcountryFetchdata(event.target.value)


     }

     const selectedcountryFetchdata=async(selectedcountry)=>{
        const responce=await axios.get(`https://restcountries.com/v3.1/name/${selectedcountry}`) 
        const countryData=(responce.data[0])  
        console.log("captial",countryData);
         
        setCaptial(countryData)
     }
     

    return ( 
        <> 
        <h1>COUNTRYNAMES</h1> 
        <select className='countrylist' value={selectedcountry} onChange={selectCountryHandler}>
           {  country.map((eachcountry) =>
                <option className='clist' value={eachcountry}>{eachcountry}</option>
            ) 
        } 
       
            
       

        </select>
        {/* <h1 className='county'>{selectedcountry}</h1>  */}
        <h1>{Captial.capital}</h1>
       
        </>
        
    )
}

export default Countyapi;
