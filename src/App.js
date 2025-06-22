
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Interested } from './Pages/Interested';
import { Applied } from './Pages/Applied';
import { Rejected } from './Pages/Rejected';
import { Home } from './Pages/Home';
import { ROUTES } from './const';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/">Home</Link>
        <br />
        <Link to="./Interested">気になっている企業一覧</Link>
        <br />
        <Link to="./Applied">応募済み企業一覧</Link>
        <br />
        <Link to="./Rejected">落選・選考辞退した企業一覧</Link>
        <br />

         <Routes>
          <Route path={ROUTES.Home} element={<Home />} />
          <Route path={ROUTES.Interested} element={<Interested />} />
          <Route path={ROUTES.Applied} element={<Applied />} />
          <Route path={ROUTES.Rejected} element={<Rejected />} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}




export default App;
