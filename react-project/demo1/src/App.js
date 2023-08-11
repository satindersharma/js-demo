
import './App.css';
import { ConfigProvider, theme } from 'antd';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Contact from './Contact';
import  Feedback  from './Feedback';

function App() {
  return (

    <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <BrowserRouter>
            
            
        <nav className="navbar navbar-expand-lg bg-warning">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about" >About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/feedback' element={<Feedback/>}/>
    </Routes>
    
    </BrowserRouter>
  </ConfigProvider>

  );
}

export default App;
