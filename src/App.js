import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Error408 from './components/Error408';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/error' element={<Error408 />} />
        <Route path ='/fdc' element={<Main />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
