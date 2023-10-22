
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Archives from './Archives';
import Add from './Add';
import Update from './Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Archives/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
