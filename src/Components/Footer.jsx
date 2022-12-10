import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const {theme} = useContext(ContextGlobal);
  return (
    <footer>
        <p>Powered by</p>
        <footer style={{background: theme.secondBackground, color: theme.color}}></footer>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
