import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Menu from './comp/Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Videopage from './pages/Videopage';
import Login from './pages/Login';
import { useSelector } from 'react-redux';




function App() {
  const {currentUser} = useSelector((state) => state.user)

  return (
    <BrowserRouter>
    <div className="App">
       <Navbar/>
      <div className='below'>
        <Menu/>
        <Routes>
          <Route path='/'>
            
            <Route index element={<Homepage type="random" />} />
            <Route path="trends" index element={<Homepage type="trend"/>} />
            <Route path="subscriptions" index element={<Homepage type="sub" />} />

            <Route path={currentUser ? "" : "login"} element={currentUser? <Homepage type="trend"/> : <Login/> } />
            <Route path="video">
              <Route path=":id" element={<Videopage type="random"/>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
