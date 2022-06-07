// import SimpleSidebar from './Components/SimpleSidebar';
import './App.css';
import Navbar from './Components/Navbar';
import { ThemeContext } from './Context/Themecontext';
import { useContext } from 'react';
function App() {
  const {isLight}=useContext(ThemeContext)
  return (
   <div className={`App ${isLight ? 'light' : 'dark'}`}>
     {/* <SimpleSidebar/> */}
     <Navbar/>
   </div>
  );
}

export default App;
