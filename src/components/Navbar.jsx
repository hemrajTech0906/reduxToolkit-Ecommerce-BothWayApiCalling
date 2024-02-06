import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import{useSelector} from 'react-redux'

const Navbar = () => {
  // whenever u need data from store i.e why to access data from using useSelector Hook {redux-react}
  // small  naming convension the store {{{name:cart}}} is define as store data i.e why i have access 
  let itemGetFromStore=useSelector((state)=>state.cart)
  return (
    <div className='navigation'>
        <span>ReduxToolkit</span>
        <div>
                {/* <h1><Link style={{marginRight:'50px'}} to={'/'}>HOME</Link></h1>
                <h1> <Link  to={'/cart'}>CART</Link></h1> */}
                <ul>
                <li><h1 ><Link  to={'/input'}>input</Link></h1></li>

                  
                    <li><h1 ><Link  to={'/'}>HOME</Link></h1></li>
                    <li> <h1> <Link  to={'/cart'}>CART</Link></h1></li>
                </ul>
                
               

        </div>
             <span style={{fontWeight:'bolder'}}>items:{itemGetFromStore.length}</span>
             {/* <h1>hhhhhh</h1> */}
             {/* style={{display:'flex',alignItems:'center'   ,justifyContent:'space-around',fontFamily:"font-family: 'Arial', sans-serif;"}} */}
    </div>
  )
}

export default Navbar