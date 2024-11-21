
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Traning from './Pages/Traning/Traning';

import{BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (
     <div className='App'>
     <Router>
        <ScrollToTop>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/traning" element={<Traning/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>} />
         </Routes>
        </ScrollToTop>
     </Router>
    </div>
   
  );
}

export default App;
