
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';

const UserContext = createContext();

const About = ()=> {

    const [user, setUser] = useState('WD95P Bootcamp')
    var navigate = useNavigate(); 
    useEffect( ()=>{
        const validateAccess = localStorage.getItem('loginUser');
        if(validateAccess == null){
          navigate('/login');
        }
    }, []);  

    return (
    <UserContext.Provider value={user}>
    <h3> {`Hello ${user}`} </h3>
    <Component2 />   
    </UserContext.Provider>
    )


}

function Component2() {
    return (
      <div>
        <h1>Component 2 </h1>
        <Component3 />
      </div>
    );
  }


  function Component3() {
    return (
      <div>
        <h1>Component 3</h1>
        <Component4  />
      </div>
    );
  }

  function Component4() {
    return (
      <div>
        <h1>Component 4</h1>
        <Component5 />
      </div>
    );
  }

  function Component5() {
    const msg = useContext(UserContext);
    return (
      <div>
        <h1>Component 5</h1>
        <h2>{`Hello ${msg} again!`}</h2>
      </div>
    );
  }


export default About