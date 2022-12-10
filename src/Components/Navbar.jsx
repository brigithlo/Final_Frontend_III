import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'



const Navbar = () => {
  const {theme} = useContext(ContextGlobal);
  const {handleChangeTheme} = useContext(ContextGlobal);
  const {routes}= useContext(ContextGlobal);
  return (
    <nav style={{background: theme.secondBackground, color: theme.color}}>
      <img src={theme.img} alt='DH-logo' className='DH-logo' />
  {Object.keys(routes).map(route=><Link key={route} style={{background: theme.secondBackground, color: theme.color}} to={routes[route]}> <span>{route}</span> </Link>)}
  
  <div className='checkbox' onClick={handleChangeTheme}>
    <img src="./images/sun.png" alt="" />
  </div>
 
    </nav>
  )
}

export default Navbar