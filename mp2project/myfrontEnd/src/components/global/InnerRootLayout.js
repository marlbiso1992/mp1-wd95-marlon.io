import Main from './main';
import Logout from './logoutnav';
const InnerRootLayout = () => {

    return (

        <div className='InnerRootLayout'>
            <Logout></Logout>
            <Main>
            </Main>

        </div>


    )

    
}

export default InnerRootLayout