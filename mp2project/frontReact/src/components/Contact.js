import {useState, useEffect, useRef} from "react";

const Contact = ()=> {
  //const [inputValue, setInputValue] = useState("");
   //const count = useRef(0); 
   /*
   useEffect( ()=>{
        count.current = count.current + 1;
   }) */
   
   const [inputValue, setInputValue] = useState("");
   const previousInputValue = useRef("");

   useEffect(()=>{
    
    previousInputValue.current = inputValue;

   }, [inputValue])

    return (
        <div className='Contact'>
          
          <input type="text" value={inputValue} onChange={ (e)=> setInputValue(e.target.value) } />

          <h2> Current Value: {inputValue} </h2>
          <h2> Prevoius Value: {previousInputValue.current} </h2>
          
        </div>

    )


}

export default Contact