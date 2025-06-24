
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Interested } from './Pages/Interested';
import { Applied } from './Pages/Applied';
import { Rejected } from './Pages/Rejected';
import { Home } from './Pages/Home';
import { ROUTES } from './const';
import { useState } from 'react';

function App() {
  
  const[companyList,setCompanyList] = useState([]);
  

  return (
    <BrowserRouter>
      <div className='App'>
        <div className="dropdown">
  <button className="dropbtn">企業一覧メニュー</button>
  <div className="dropdown-content">
    <Link to="/">Home</Link>
    <Link to="/interested">気になっている企業一覧</Link>
    <Link to="/applied">応募済み企業一覧</Link>
    <Link to="/rejected">落選・選考辞退した企業一覧</Link>
  </div>
</div>

         <Routes>
          <Route path={ROUTES.Home} element={<Home 
          companyList={companyList}
          setCompanyList={setCompanyList}/>} />
          <Route path={ROUTES.Interested} element={<Interested companyList={companyList}/>}/>
          <Route path={ROUTES.Applied} element={<Applied companyList={companyList}/>} />
          <Route path={ROUTES.Rejected} element={<Rejected companyList={companyList}/>} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}




export default App;
