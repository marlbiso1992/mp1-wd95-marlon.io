import { useState, useEffect, useRef } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Checkout = ()=>{
    const [allTodo, setAllTodo] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    
    useEffect( ()=>{
    
     const selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
     setAllTodo(selectedItems);
     console.log(selectedItems);
     let sum = 0;   
     for(let y=0; y < selectedItems.length; y++){
        sum = sum + parseInt(selectedItems[y].price);
      }
      setTotalPrice(sum);
    
      }, []);  
    

   return(
    <div className="Checkout">
      Checkout  
  
      <ListGroup>
        { allTodo.map(
            (item) => (
                    <ListGroup.Item> {item.itemName} {item.price} </ListGroup.Item>
            )
           )
        }
        {'total price:' + totalPrice} 
    </ListGroup>

    </div>

   ) 

}

export default Checkout;