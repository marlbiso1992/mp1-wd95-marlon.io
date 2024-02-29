import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [allTodo, setAllTodo] = useState([]);

  
  const handleReadData = async () => {
    const response = await fetch('http://localhost:5001/all-profiles');
    const data = await response.json();
    setAllTodo(data);
  }
  useEffect(()=>{
    handleReadData();
  }, [])
 
  // on load page
    
    return (
        <div className='Admin'>

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
                      </td>
                  </tr>
                  ) 

                ) }
                
              </tbody>
            </Table>

  

        </div>

    )

}


export default Admin