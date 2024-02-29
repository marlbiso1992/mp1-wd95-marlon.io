import Card from 'react-bootstrap/Card';
import TinyMCEEditor from './TinyMCEEditor';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { ArrowThroughHeart, Phone } from 'react-bootstrap-icons';

import { useState, useEffect } from 'react';

const User = ()=> {
  var navigate = useNavigate(); 

  useEffect( ()=>{
    
    const validateAccess = localStorage.getItem('loginUser');
    if(validateAccess == null){
      navigate('/login');
    }

  }, []);  

let CheckThis = "this is a backend data";

const [content, setContent] = useState('');

const handleEditorChange = (newContent)=>{
    setContent(newContent)
}

const handleSaveButton = (e) => {
alert(content);
}


    return (
     <div className='User'>

<ArrowThroughHeart  color="royalblue" size={96}  />
<Phone  color="royalblue" size={96}  />

      React TinyMCE Example
      <TinyMCEEditor value={content} onChange={handleEditorChange} />
     {/* <div>
        <h2>Editor Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div> */} 
  <Button variant="primary" onClick={handleSaveButton} type='submit'>Save Content</Button>
    
           
     <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title> {CheckThis} </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   

        </div>

    )


}


export default User