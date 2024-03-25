//import icons 
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  
  return (
    <> 
      <Header/>
      <Sidebar/>
      <Main/>
    </>
  )
}

export default App
