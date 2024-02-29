
import { Link } from 'react-router-dom'

const Navigation = ()=> {

  
    return (
        <div className='Navaigation'>
            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About Us</Link>
                <Link to='/contact-us'>Contact Us</Link>
            </nav>


        </div>

    )


}


export default Navigation