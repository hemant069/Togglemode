import React, { useContext } from 'react'
import { Switch } from '@chakra-ui/react'
import Styles from './Themecss.module.css'
import { ThemeContext } from '../Context/Themecontext'
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const Navbar = () => {
    const {isLight,toggleTheme}=useContext(ThemeContext)
    const { colorMode, toggleColorMode } = useColorMode()
    console.log(colorMode,toggleColorMode);
  

  return (
    <div className={Styles.main}>
        <h1>My Dashboard</h1>
     <div className={Styles.sub}>
         <p className={Styles.nav}>DarkMode</p>
         <Button size='xs' onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
     </div>

       
       
    </div>
  )
}

export default Navbar