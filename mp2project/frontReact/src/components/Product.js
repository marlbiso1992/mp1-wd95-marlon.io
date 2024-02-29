import { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

const Product = ()=>{
    const [allTodo, setAllTodo] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    

    const handleReadData = async () => {
        const response = await fetch('http://localhost:5000/get-todo-data');
        const data = await response.json();

        setAllTodo(data);
        //console.log(data);

        const selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
        setSelectedProduct(selectedItems);
    

      }
    
      useEffect(()=>{
       handleReadData();
      }, [])
    
     
    const handleAddtoCart = (obj)=> {
     
      let all_SelectedTodo = [obj, ...selectedProduct];
       
      let sum = 0;
      for(let y=0; y < all_SelectedTodo.length; y++){
        sum = sum + parseInt(all_SelectedTodo[y].price);
      }
      console.log('total price:' + sum);
      localStorage.setItem('selectedItems', JSON.stringify(all_SelectedTodo));
      //localStorage.removeItem('selectedItems'); example to delete data in localstorage
      setSelectedProduct(all_SelectedTodo);
      
    }

    const checkoutredirect = ()=> {
        window.location = '/checkout';
    }


    return (
        <div className="Product"> 
            <Button onClick={ ()=> checkoutredirect() } variant="warning">No of items in the cart is :{ selectedProduct.length }, click here to checkput {'=>'} </Button> 

            <Row xs={1} md={2} className="g-4 mt-2">
                {Array.from({ length: allTodo.length }).map((_, idx) => (
                    <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={ allTodo[idx].image  } />
                        <Card.Body>
                        <Card.Title> { allTodo[idx].itemName } </Card.Title>

                        <Card.Text>
                            { allTodo[idx].itemDescription  }
                        </Card.Text>

                        <Card.Text>
                            { allTodo[idx].price  }
                        </Card.Text>
                        
                        <Button variant="success" onClick={ ()=>handleAddtoCart(allTodo[idx]) }>ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>


        </div>
    )
}


export default Product;