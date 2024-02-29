import {useState, useCallback} from "react";

import SimpleTodo from "./SimpleTodo";

const Hooks = ()=> {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    

    const incrementFunction = ()=>{
        setCount( (c)=> c + 1 ); 
    }

    const addTodo = useCallback( ()=>{
        setTodos( (t)=>[...t, "My New Todo"] )
    }, [todos]);
  
    return (
        <div className='Hooks'>

          <SimpleTodo todos={todos} addTodo={addTodo}  />   
          
          <hr />

          <div>
            Count : {count} 
                <button onClick={incrementFunction}> + </button>
          </div>  

      
        </div>

    )


}

export default Hooks