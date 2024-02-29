
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import apiRequest from '../dataFetch/apiRequest';

const Todo = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [show, setShow] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  
  const [butMode, setButMode] = useState('');
  const [butName, setButname] = useState('');
  const [itemId, setSetItemId] = useState('');

  const [todoPrice, setTodoPrice] = useState('');
  
  
  
  const handleShow = () => { 
  setButMode('create')
  setButname('Save')  
  setShow(true);
  setItemName('');
  setItemDescription('');
  }
  const handleClose = () => setShow(false);

  const handleSave = async () => {
   
    if ( butMode === 'create' ) {

      if (itemName === ''){
        alert('Item Name is Empty, this is required');
        return;
      }

        const objReq = {
          method: 'POST',
          headers: {
              'Content-Type':'application/x-www-form-urlencoded',
          },
          body:"ItemName="+itemName+"&ItemDescription="+itemDescription,
        }

        const data = await apiRequest('http://localhost:5000/save-todo', objReq);
        console.log(data);

        if(data.code === "success"){
          console.log('Ok save ');
        } else {
          console.log('Not save');
        }
        handleReadData();
        setShow(false);

    } else {
      //update process
      const objReq = {
        method: 'PUT',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body:"ItemName="+itemName+"&ItemDescription="+itemDescription,
      }

      const data = await apiRequest('http://localhost:5000/update-todo/'+itemId, objReq);
      console.log(data);

      if(data.code === "success"){
        console.log('Ok save ');
      } else {
        console.log('Not save');
      }
      handleReadData();
      setShow(false);
      


    } 

  }

  const handleReadData = async () => {
    
    const token = localStorage.getItem('accessToken');
    let newToken = '';
    if (token) {
     newToken = token.replace(/"/g,''); 
    }
    const response = await fetch('http://localhost:5000/get-todo-data', {
      method: 'GET',
      headers: {
                'Authorization': `Bearer ${newToken}`,
               }
    }).then(response =>{
      return response.json();
    }).then(data=>{
      console.log(data);
      setAllTodo(data);
    });


    //const data = await response.json();
    //console.log('check all todo', data);
    
  }

  useEffect(()=>{
    handleReadData();
  }, []) // on load page

  //delete of todo
  const deleteItem = async (id)=> {

    let text = "Are you sure to delete todo id number:" + id + "?";
    if (window.confirm(text) === true) {
  
      const objReq = { method: 'DELETE'}
      await apiRequest('http://localhost:5000/delete-todo/'+id, objReq);
      handleReadData();
    } 

   
  }

  const updateItem = async (id)=> {
    setButMode('update')
    setButname('Update')
    setSetItemId(id); 
    const response = await fetch('http://localhost:5000/get-todo/'+id);
    const data = await response.json();

    //console.log('check one todo', data);
    setItemName(data.itemName);
    setItemDescription(data.itemDescription);
    setTodoPrice(data.price);
    setShow(true);
  }

  const handleSelect = async (id)=> {
    const response = await fetch('http://localhost:5000/get-todo/'+id);
    const data = await response.json();
    localStorage.setItem('selectedTodoRecord', JSON.stringify(data));
  }

  const handelSearch = (e)=>{
   let searchTerm = e.target.value;
   //alert(searchTerm);

    if(searchTerm != ''){ 
      
      setAllTodo(allTodo.filter( (item)=>{
          return item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
      })) 

    } else {
      handleReadData(); //
    }

  }

    return (
        <div className='Todo'>
        
        <Button variant="info" onClick={handleShow}>
        Add Item
        </Button>

      <Form>
      <Form.Group className="mb-3" controlId="searchForm">
        <Form.Control type="text" onChange={handelSearch} placeholder="Enter to search" />
      </Form.Group>
      </Form>
      
        <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th> 
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>

         
                { allTodo.map (
                    (item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemDescription}</td>
                    <td>{item.price}</td>
                    
                    <td>  
                      <Button variant="danger" onClick={ ()=> deleteItem(item.id) }>Delete</Button> {'  '}
                      <Button variant="success" onClick={ ()=> updateItem(item.id) }>Update</Button> {'  '}
                      <Button variant="primary" onClick={ ()=> handleSelect(item.id) }>Select</Button>
                      
                      </td>
                  </tr>
                  ) 

                )  }
                
              </tbody>
            </Table>

   

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <Form>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item Name</Form.Label>
          <Form.Control required type="test" value={itemName} onChange={ (e)=>{ setItemName(e.target.value) }} placeholder="Enter Item Name" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Description</Form.Label>
          <Form.Control as="textarea" value={itemDescription} onChange={ (e)=>{ setItemDescription(e.target.value) } } rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price </Form.Label>
          <Form.Control required type="test" value={todoPrice} onChange={ (e)=>{ setTodoPrice(e.target.value) }} placeholder="Enter Item Name" />
        </Form.Group>
                    

        </Form>
        
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSave}>
            {butName}
          </Button>
        </Modal.Footer>
      </Modal>

        </div>

    )

}


export default Todo
Todo.js
Displaying Todo.js.