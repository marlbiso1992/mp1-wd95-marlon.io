import { useState, useEffect } from 'react';
import {Container, Table, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../dataFetch/apiRequest';

const Admin = () => {
  const [allTodo, setAllTodo] = useState([]);
  const navigate = useNavigate(); 
  
  const handleReadData = async () => {
    const response = await fetch('http://localhost:5001/all-profiles');
    const data = await response.json();
    setAllTodo(data);
  }
  useEffect(()=>{
  const validateAccess = localStorage.getItem('loginUser');
  if(validateAccess == null){
    navigate('/login');
  }
else{
    handleReadData();
}
  }, [])
 
  const deleteItem = async (id)=> {

    let text = "Are you sure to delete todo id number:" + id + "?";
    if (window.confirm(text) === true) {
  
      const objReq = { method: 'DELETE'}
      await apiRequest('http://localhost:5001/delete-todo/'+id, objReq);
      handleReadData();
    } 

  }
  // on load page
    
    return (
        <div className='Admin'>
      <Container>
        <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th> 
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>

         
                {  allTodo.map(

                  (item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    
                    <td>  
                    <Link className="text-decoration-none btn btn-sm btn-success" to={`/update-profile/${item.id}`}>Update</Link>
                    <Link className="text-decoration-none btn btn-sm btn-danger"  onClick={ ()=> deleteItem(item.id) }>Delete</Link>
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>

            </Container>

        </div>

    )

}


export default Admin