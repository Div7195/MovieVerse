import logo from './logo.svg';
import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Explore from './components/explore/Explore';
import DetailedMovie from './components/detailedMovie/DetailedMovie';





function App() {
  return (
    
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <div style={{marginTop:64}}>
            <Routes>
              {/* <Route path = '/login' element = {<Login/>}/> */}
              <Route  path = '/' element = {<Home/>}/>
              <Route  path = '/explore' element = {<Explore/>}/>
              <Route  path = '/movie/:id' element = {<DetailedMovie/>}/>
            </Routes>
          </div>
        </BrowserRouter>
     </DataProvider>
    
  );
}

export default App;
