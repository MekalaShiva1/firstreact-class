import React, { useReducer } from 'react'

function UseReducer() {  
    const state=0
    const reducer=(state,action)=>{
if(action.type==="add"){
    return state+1
}
else if(action.type==="sub"){ 


    
    return state-1  
    

}
    }
    const [intialState,dispatch]=useReducer(
        reducer,state
    )   

    const addHandler=()=>{
        dispatch(
            {
                type:"add"
            }
        )
    };

    const removeHandler=()=>{
        dispatch(
            {
                type:"sub"
            }
        )
    }

    return ( 
        <> 
        <h1> {intialState}</h1>
        <button onClick={addHandler}>add</button> 
        <button onClick={removeHandler} >remove</button>
       
        </>
        
    )
}

export default UseReducer
