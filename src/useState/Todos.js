import { useState } from "react"




export const Todos=()=>{ 
    
  
   const intialState=[{
        id:"1",
        title:"moring",
        routine:["i wake up at 5am","breakfasr at 7AM",],


    },

    {
        id:"2",
        title:"afternoon",
        routine:["lunch at 1pm","class at 2:30PM",],


    },
];  
const [todo,setTodo]=useState(intialState)  
    

    const addNewTodo=()=>{
        const dummyTodo={
            id:3,
            title:"evening",
            routine:["break at 4pm","time out at 6:30PM",],
            
        }  ;  
        const dummyIncluded=todo.find(
            (eachTodo)=>eachTodo.id===dummyTodo.id
        );
        const updatedTodos=[...todo,dummyTodo];
        if(!dummyIncluded){
            setTodo(updatedTodos)
        }

    }
    const removeHandler=(each)=>{ 
        const id=each.id;
        const filteredData=todo.filter((eachTodo)=>eachTodo.id!=id);
        setTodo(filteredData)

    }



    return(
        <>  
        <button onClick={addNewTodo}>add new todo</button>
        {todo.map(each=>{
            return(
                <>   
                <button onClick={()=>removeHandler(each)} >RemoveTodo</button>
                
                <h1>{each.title}</h1> 
               
                {
                    each.routine.map(eachroutine=>{
                        return(
                            <>  
                            
                            <h3>{eachroutine}</h3>
                            </>
                        )
                    })
                }
                </>
            )
        })}
        </>
    )
}